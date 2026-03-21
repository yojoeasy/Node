const path = require('path');

// Get filename from a path
const filename = path.basename('/users/docs/file.txt');
console.log("filename : ", filename); // Platform-specific path segment separator

// Get filename without extension
const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
console.log(filenameWithoutExt);

console.log("dirname : ", path.dirname('/home/user/file.txt')); 
// /home/user

console.log("extname : ", path.extname('index.html')); 
// .html

console.log('parse : ', path.parse('/home/user/file.txt'));
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

const obj = {
  dir: '/home/user',
  base: 'file.txt'
};
console.log("format : ", path.format(obj)); 
// /home/user/file.txt

console.log("join : ", path.join('home', 'user', 'file.txt')); 
// home/user/file.txt

console.log("resolve : ", path.resolve('file.txt')); 
// /current/working/directory/file.txt

console.log("normalize : ", path.normalize('/home/user/../file.txt')); 
// /home/file.txt

console.log("isAbsolute : ", path.isAbsolute('/home/user')); 
// true
console.log("isAbsolute : ", path.isAbsolute('home/user')); 
// false

console.log("sep : ", path.sep); 
// Linux/Mac: /
// Windows: \

console.log("delimiter : ", path.delimiter); 
// Linux/Mac: :
// Windows: ;

console.log("toNamespacedPath : ", path.toNamespacedPath('C:\\path\\to\\file.txt')); 
// \\?\C:\path\to\file.txt on Windows, unchanged on other platforms

console.log("relative : ", path.relative('/home/user/docs', '/home/user/images'));
// ../images
console.log("relative : ", path.relative('/home/user/docs', '/home/user/docs/file.txt'));
// file.txt

console.log("posix : ", path.posix.join('home', 'user', 'file.txt')); 
// home/user/file.txt

console.log("win32 : ", path.win32.join('home', 'user', 'file.txt')); 
// home\user\file.txt   

// Note: The outputs may vary based on the operating system due to path format differences.
