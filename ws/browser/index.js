const CONFIG = require("../config");
const util = require("../util");
import * as echarts from "echarts";
const STRING_TEST_CASES = CONFIG.STRING_TEST_CASES;
const ARRAYBUFFER_TEST_CASES = CONFIG.ARRAYBUFFER_TEST_CASES;
let string_test_result = [];
let arraybuffer_test_result = [];
const main_element = document.querySelector("#main")

const ws = new WebSocket(`ws://localhost:${CONFIG.WS_SERVER_PORT}`);

let onMessage = null;
let onError = null;

function test(dataType, length) {
  console.log(`test, data type: ${dataType}, length: ${length}`);
  return new Promise(function (resolve, reject) {
    let data;
    let startTime = 0;
    let cost_time = 0;
    if (dataType == "arraybuffer") {
      ws.binaryType = dataType;
      data = util.createArraybuffer(length);
    } else if (dataType == "string") {
      ws.binaryType = null;
      data = util.createString(length);
    }

    startTime = Date.now();
    console.log(`start time: ${startTime}`);
    ws.send(data);
    onMessage = function (event) {
      cost_time = Date.now() - startTime;
      if (typeof event.data === "string") {
        console.log("Received data string");
        console.log(`receive length: ${event.data.length}`);
        if (length != event.data.length) {
          reject("error data length");
        } else {
          string_test_result.push({
            length: length,
            cost_time: cost_time,
          });
        }
      }
      if (event.data instanceof ArrayBuffer) {
        console.log("Received arraybuffer");
        console.log(`receive length: ${event.data.byteLength}`);
        if (length != event.data.byteLength) {
          reject("error data length");
        } else {
          arraybuffer_test_result.push({
            length: length,
            cost_time: cost_time,
          });
        }
      }

      resolve(cost_time);
      // ws.close();
    };
    onError = function (event) {
      reject(event);
    };
  });
}

async function run_test() {
  for (let i = 0; i < STRING_TEST_CASES.length; ++i) {
    try {
      let cost = await test(
        STRING_TEST_CASES[i].type,
        STRING_TEST_CASES[i].length
      );
      console.log(`cost: ${cost}ms`);
    } catch (err) {
      console.error(err);
    }
  }
  for (let i = 0; i < ARRAYBUFFER_TEST_CASES.length; ++i) {
    try {
      let cost = await test(
        ARRAYBUFFER_TEST_CASES[i].type,
        ARRAYBUFFER_TEST_CASES[i].length
      );
      console.log(`cost: ${cost}ms`);
    } catch (err) {
      console.error(err);
    }
  }
}

main_element.style.width = (window.innerWidth - 80) + "px"
main_element.style.height = (window.innerHeight - 80) + "px"

ws.addEventListener("open", async function (event) {
  await run_test();
  console.log(string_test_result);
  console.log(arraybuffer_test_result);
  draw()
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

function draw() {
  console.log("draw")
  let xdata = [];
  let series = [
    {
      name: "string",
      type: "line",
      data: [],
    },
    {
      name: "arraybuffer",
      type: "line",
      data: [],
    },
  ];

  for (let i = 0; i < string_test_result.length; ++i) {
    xdata.push(string_test_result[i].length);
    series[0].data.push(string_test_result[i].cost_time);
  }
  for (let i = 0; i < arraybuffer_test_result.length; ++i) {
    series[1].data.push(arraybuffer_test_result[i].cost_time);
  }
  console.log(series)

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("main"));
  // 绘制图表
  myChart.setOption({
    title: {
      text: "websocket 测试",
      x: "center",
      y: "top",
    },
    tooltip: {},
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
