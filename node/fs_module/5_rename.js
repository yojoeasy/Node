const fs = require('fs');
fs.rename('demo.txt', 'newname.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});

