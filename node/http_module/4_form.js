const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    // Collect data chunks
    req.on("data", chunk => {
      body += chunk.toString();
    });

    // When all data is received
    req.on("end", () => {
      console.log("Raw Body:", body);

      // Parse form data
      const parsedData = querystring.parse(body);
      console.log("Parsed Form Data:", parsedData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Form data received!", data: parsedData }));
    });
  } else {
    // Show a simple HTML form if GET /
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <form method="POST" action="/submit">
          <input type="text" name="name" placeholder="Enter Name" />
          <input type="text" name="role" placeholder="Enter Role" />
          <button type="submit">Submit</button>
        </form>
      `);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
