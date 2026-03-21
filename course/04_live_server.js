const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    // Serve files from the 04_live_server
    const filePath = path.join(__dirname, '04_live_server', req.url === '/' ? 'index.html' : req.url);
    // const extname = path.extname(filePath);
    // const contentType = 'text/html';
    const extName = String(path.extname(filePath).toLowerCase());
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    };
    const contentType = mimeType[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Read and serve the error.html page on 404
                const errorPagePath = path.join(__dirname, '04_live_server', 'error.html');
                fs.readFile(errorPagePath, (err, content) => {
                    if (err) {
                        // If error.html is also missing, fallback to plain text
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 File Not Found</h1>', 'utf-8');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// information responses (100-199)
// success responses (200-299)
// redirection responses (300-399)
// client error responses (400-499)
// server error responses (500-599)