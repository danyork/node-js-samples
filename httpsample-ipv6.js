var http = require('http');

var handler = function (request, response) {
   response.writeHead(200, {"Content-Type":"text/plain"});
   response.end ("Hello World!\n");
   console.log("Got a connection");
};

var server6= http.createServer();
server6.addListener("request",handler);
server6.listen(80,"2607:f128:42:d7::2");

var server= http.createServer();
server.addListener("request",handler);
server.listen(80,"69.162.133.22");

console.log("Server running on localhost at port 80");
