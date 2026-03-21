const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello World from Node.js');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// http://localhost:3000
// http://127.0.0.1:3000