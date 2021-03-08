const util = require("../util");
const CONFIG = require("../config");

let ws = null
let onMessage = null;
let onError = null;


function test_(dataType, data) {
  return new Promise(function (resolve, reject) {
    let startTime = 0;
    let cost_time = 0;
    if (dataType == "arraybuffer") {
      ws.binaryType = dataType;
    } else if (dataType == "string") {
      ws.binaryType = "blob";
    }
    startTime = Date.now();
    ws.send(data);
    onMessage = function (event) {
      cost_time = Date.now() - startTime;
      if (typeof event.data === "string") {
        if (data.length != event.data.length) {
          reject("error data length");
        } else {
          resolve(cost_time);
        }
      }
      if (event.data instanceof ArrayBuffer) {
        if (data.byteLength != event.data.byteLength) {
          reject("error data length");
        } else {
          resolve(cost_time);
        }
      }

    };
    onError = function (event) {
      reject(event);
    };
  });
}

async function run_test_suits(test_suits) {
  return new Promise(async function(resolve, reject) {
    let suits_result = []
    try {
      for (let i = 0; i < test_suits.length; ++i) {
        let suit = test_suits[i]
        let cases = suit.cases || []
        const type = test_suits[i].type
        let suit_result = {
            name: suit.name,
            result: []
        }
        for (let j = 0; j < cases.length; ++j) {
            const length = cases[j].length
            const data = suit.genTestData(length)
            let total_cost_time = 0;
            for (let k = 0; k < CONFIG.CASE_RUN_TIME; ++k) {
              total_cost_time += await test_(type, data)
            }
            suit_result.result.push({
                length: length,
                cost_time: total_cost_time / CONFIG.CASE_RUN_TIME,
            })
        }
        suits_result.push(suit_result)
      }
    } catch(err) {
      console.log(err)
      reject(err)
    }
    resolve(suits_result)
  })

}

export async function test(test_suits) {
  return new Promise(function (resolve, reject) {

    ws = new WebSocket(`ws://localhost:${CONFIG.WS_SERVER_PORT}`);
    ws.addEventListener("open", async function (event) {
      try {
        let test_suits_result = await run_test_suits(test_suits);
        resolve(test_suits_result)

      } catch (err) {
        reject(err)
      }
    });
    
    ws.addEventListener("close", function () {
      console.log("ws close");
    });
    
    ws.addEventListener("message", function (event) {
      if (onMessage) {
        onMessage(event);
      }
    });
    
    ws.addEventListener("error", function (event) {
      if (onMessage) {
        onError(event);
      }
    });
  });
}
