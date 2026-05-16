// 1. Importing from an ES Module
// - The default export ('multiply') is imported without curly braces.
// - Named exports ('pi', 'add', 'subtract') are imported with curly braces.
// - IMPORTANT: You must include the '.js' extension when importing local files in ESM!
import multiply, { pi, add, subtract } from './mathUtils.js';

// 2. Recreating __filename and __dirname in ES Modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// import.meta.url is the only thing provided natively by ESM (it looks like file:///c:/...)
// We use fileURLToPath to convert it to a standard Windows/Linux path
const __filename = fileURLToPath(import.meta.url);

// Then we use dirname to strip the file name and get just the folder path
const __dirname = dirname(__filename);


// --- Execution Output ---

console.log('--- ES Modules Import/Export ---');
console.log('Pi is:', pi);
console.log('Add 5 + 3:', add(5, 3));
console.log('Subtract 10 - 4:', subtract(10, 4));
console.log('Multiply 4 * 4:', multiply(4, 4));

console.log('\n--- Recreated Global Variables ---');
console.log('1. import.meta.url:', import.meta.url);
console.log('2. __filename:     ', __filename);
console.log('3. __dirname:      ', __dirname);
