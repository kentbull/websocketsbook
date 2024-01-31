var WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({ port: 8181 });

wss.on("connection", function (ws) {
  console.log("client connected");
  ws.on("message", function (message) {
    console.log(message);
  });
});

console.log("Server running on port 8181")