var net = require("net");

var s = net.createServer( function(c) {
    c.addListener("connect", function () {
    console.log("Connection from " + c.remoteAddress);
    c.end("Hello World");
});

});

s.listen(8000);

console.log("TCP server running on port 8000")
