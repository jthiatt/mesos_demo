
port = process.argv[2];
var os = require("os");

var http = require('http');
http.createServer(function (req, res) {
	server = os.hostname(); 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World\n');
	res.write('Hostname = ' + server + '\n');
	res.write('Port = ' + port + '\n');
	res.end('\n');
}).listen(port);

console.log('Server running on port ' + port);

