const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = "";

  // Data chunk received
  res.on('data', chunk => {
    data += chunk;
  });

  // End of response
  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
