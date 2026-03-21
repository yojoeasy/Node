const http = require('http');

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

      // If data is JSON
      try {
        const parsedData = JSON.parse(body);
        console.log("Parsed JSON:", parsedData);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Data received!", data: parsedData }));
      } catch (err) {
        // If not JSON
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON");
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Send a POST request to /submit");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
