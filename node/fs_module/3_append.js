const fs = require('fs');
fs.appendFile('example.txt', '\nThis is new data.', (err) => {
  if (err) throw err;
  console.log('Data appended!');
});
