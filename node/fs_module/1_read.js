const fs = require('fs');

// Async (non-blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// Sync (blocking)
const data = fs.readFileSync('example.txt', 'utf8');
console.log("File content:", data);