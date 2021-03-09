const CONFIG = require("../config");

let iframe = null
let handleMsg_ = null

function createFrame(id, src, hidden) {
  const el = document.createElement('iframe')
  el.setAttribute('id', id)
  el.setAttribute('name', id)
  el.setAttribute('src', src)
  el.setAttribute('frameborder', '0')
  Object.assign(el.style, {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    background: '#fff',
    display: 'block',
  })
  if (hidden) {
    el.style.display = 'none'
  }
  document.body.appendChild(el)
  return el
}


function handleMsg(e) {
  if (e.source == iframe.contentWindow) {
    if (handleMsg_) {
      handleMsg_(e)
    }
  }
}

function test_(data) {
  return new Promise(function (resolve, reject) {
    const len = data.length || data.byteLength
    let start_time = Date.now()
    handleMsg_ = function (e) {
      const res_len = e.data.length || e.data.byteLength
      if (res_len != len) {
        reject(`error length, send length: ${len}, receive length: ${res_len}`)
      }
      resolve(Date.now() - start_time)
    }
    iframe.contentWindow.postMessage(data, '*')
  });
}


export async function test(test_suits) {
  return new Promise(async function (resolve, reject) {
    iframe = createFrame("iframe", "iframe.html", true)
    window.addEventListener('message', handleMsg)
    iframe.addEventListener("load",async function () {
      let suits_result = []
      await test_("hello worker")
      for (let i = 0; i < test_suits.length; ++i) {
        let suit = test_suits[i]
        let cases = suit.cases || []
        let suit_result = {
          name: suit.name,
          result: []
        }
        for (let j = 0; j < cases.length; ++j) {
          const length = cases[j].length
          const data = suit.genTestData(length)

          let total_cost_time = 0;
          for (let k = 0; k < CONFIG.CASE_RUN_TIME; ++k) {
            total_cost_time += await test_(data)

          }
          suit_result.result.push({
            length: length,
            cost_time: total_cost_time / CONFIG.CASE_RUN_TIME,
          })
        }
        suits_result.push(suit_result)
      }
      resolve(suits_result)

    })
  })
}