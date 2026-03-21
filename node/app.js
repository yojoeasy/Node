let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This is a Node.js server.');
  console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
}).listen(8080);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This is a 8000 server.');
}).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This is a 8000 server.');
}).listen(3000);