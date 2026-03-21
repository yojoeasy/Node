const fs = require('fs');
// Overwrites or creates a new file
fs.writeFile('example.txt', 'Hello Yogesh!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});

// Sync
fs.writeFileSync('example.txt', 'Hello Yogesh!');