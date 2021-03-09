const WebSocket = require('ws');
const CONFIG = require('./config')

const wss = new WebSocket.Server({ port: CONFIG.WS_SERVER_PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log("receive message")
    ws.send(message);
  });

});