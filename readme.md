# 性能测试样例

测试了不同的数据类型:

1. `String`
2. `ArrayBuffer`
3. `SharedArrayBuffer`

使用浏览器的不同通信方式的性能比较

## 运行方式

安装:

`nodejs`，然后运行 `npm install`

1. 运行 websocket server: `npm run ws:server`
2. 运行http server: `npm run dev:server`

浏览器打开:

1. <http://localhost:2048/index.html?data_type=small> 测试小数据性能（小于1M）
1. <http://localhost:2048/index.html?data_type=big> 测试大数据性能 （小于等于10M）
1. <http://localhost:2048/index.html?data_type=all> 测试所有数据性能

横坐标是数据量，纵坐标是耗时（注意，耗时是一个来回的耗时，单程的可以认为来回的耗时除以2即可）
