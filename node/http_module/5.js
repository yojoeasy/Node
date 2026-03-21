const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "GET request - Fetch user" }));

  } else if (req.url === "/user" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "POST request - User created", data: body }));
    });

  } else if (req.url === "/user" && req.method === "PUT") {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "PUT request - User updated", data: body }));
    });

  } else if (req.url === "/user" && req.method === "DELETE") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "DELETE request - User deleted" }));

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
