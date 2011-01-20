require('tropo-webapi');
var sys = require('sys');

var tropo = new TropoWebAPI();

tropo.say("Hello, World.");

sys.puts(TropoJSON(tropo));
