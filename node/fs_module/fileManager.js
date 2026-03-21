const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'data.txt');

// 1. Create or Write File
function createFile(content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log('✅ File created/written successfully!');
  });
}

// 2. Read File
function readFile() {
  if (!fs.existsSync(filePath)) {
    console.log('❌ File does not exist!');
    return;
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📖 File Content:\n', data);
  });
}

// 3. Update (Append) File
function updateFile(newContent) {
  if (!fs.existsSync(filePath)) {
    console.log('❌ File does not exist!');
    return;
  }
  fs.appendFile(filePath, `\n${newContent}`, (err) => {
    if (err) throw err;
    console.log('✏️ File updated successfully!');
  });
}

// 4. Delete File
function deleteFile() {
  if (!fs.existsSync(filePath)) {
    console.log('❌ File does not exist!');
    return;
  }
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('🗑️ File deleted successfully!');
  });
}

// ----------------------
// Example Usage
// ----------------------
createFile("Hello Yogesh! This is your first file.");
setTimeout(readFile, 500); // Read after writing
setTimeout(() => updateFile("Adding new content..."), 1000);
setTimeout(readFile, 1500); // Read after update
setTimeout(deleteFile, 2000);
setTimeout(readFile, 2500); // Try to read after deletion