const fs = require('fs');
fs.unlink('ne.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
