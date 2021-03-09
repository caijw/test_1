import { test as websocket_test } from "./websocket_test"
import { test as worker_test } from "./worker_test"
import { test as iframe_test } from "./iframe_test"
const main_element = document.querySelector("#main");
const CONFIG = require("../config");
import * as echarts from "echarts";
import * as util from "../util"

main_element.style.width = window.innerWidth - 80 + "px";
main_element.style.height = window.innerHeight - 80 + "px";

const websocket_test_suits = [
  {
    name: "Websocket with String",
    type: "string",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createString
  },
  {
    name: "Websocket with ArrayBuffer",
    type: "arraybuffer",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createArraybuffer
  },
]

const worker_test_suits = [
  {
    name: "Worker postMessage with String",
    type: "string",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createString
  },
  {
    name: "Worker postMessage with ArrayBuffer",
    type: "arraybuffer",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createArraybuffer
  },
  {
    name: "Worker postMessage with SharedArrayBuffer",
    type: "sharedarraybuffer",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createSharedArrayBuffer
  },
]

const iframe_test_suits = [
  {
    name: "Iframe postMessage with String",
    type: "string",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createString
  },
  {
    name: "Iframe postMessage with ArrayBuffer",
    type: "arraybuffer",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createArraybuffer
  },
  {
    name: "Iframe postMessage with SharedArrayBuffer",
    type: "sharedarraybuffer",
    cases: CONFIG.TEST_CASES,
    genTestData: util.createSharedArrayBuffer
  },
]

Promise.all([
  websocket_test(websocket_test_suits),
  worker_test(worker_test_suits),
  iframe_test(iframe_test_suits),
]).then(function (results) {
  let concat_results = []
  for (let i = 0; i < results.length; ++i) {
    concat_results = concat_results.concat(results[i])
  }
  draw(concat_results)
  document.querySelector("#test_tip").innerHTML = "测试完成"
}).catch(function (err) {
  console.error("test error:", err)
})


function draw(results) {

  let series = []
  let xdata = [];
  for (let i = 0; i < CONFIG.TEST_CASES.length; ++i) {
    if (CONFIG.TEST_CASES[i].alias) {
      xdata.push(CONFIG.TEST_CASES[i].alias)
    } else {
      xdata.push(CONFIG.TEST_CASES[i].length)
    }
  }
  for (let i = 0; i < results.length; ++i) {
    const result = results[i]
    let serie = {
      name: result.name,
      type: "line",
      data: [],
      endLabel: {
        show: true,
        formatter: function (params) {
          return result.name
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      encode: {
        x: 'Year',
        y: 'Income',
        label: ['Country', 'Income'],
        itemName: 'Year',
        tooltip: ['Income'],
      }
    }
    for (let j = 0; j < result.result.length; ++j) {
      serie.data.push(result.result[j].cost_time)
    }
    series.push(serie)
  }
  var myChart = echarts.init(document.getElementById("main"));
  myChart.setOption({
    title: {
      text: "测试结果",
      x: "center",
      y: "top",
    },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
  },
    dataZoom: [{
      startValue: '0'
    }, {
      type: 'inside'
    }],
    xAxis: {
      name: "数据长度",
      data: xdata,
    },
    yAxis: {
      name: "roundtrip 耗时/ms"
    },
    series: series,
  });
}