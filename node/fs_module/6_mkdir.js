const fs = require('fs');
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});
