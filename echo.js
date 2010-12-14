var net = require('net');
net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  socket.on("data", function (data) {
    socket.write(data);
  });
}).listen(8124, "127.0.0.1");
