const vm = require('vm');

console.log('--- vm.Script ---');

// vm.Script allows you to compile a string of code ONCE, 
// and then run the compiled code multiple times.
// This is much more performant than using vm.runInNewContext() or vm.runInContext() 
// repeatedly with raw strings, because the compilation step is skipped.

const scriptCode = `
  count += 1;
  name = "John";
`;

// Compile the code into a Script object
const script = new vm.Script(scriptCode);

// We can now run this script in completely different contexts

// Context 1
const sandbox1 = { count: 0 };
vm.createContext(sandbox1);
script.runInContext(sandbox1);
console.log('Sandbox 1:', sandbox1); // { count: 1, name: 'John' }

// Context 2
const sandbox2 = { count: 10 };
vm.createContext(sandbox2);
script.runInContext(sandbox2);
console.log('Sandbox 2:', sandbox2); // { count: 11, name: 'John' }

// You can also run the script in the current context:
global.count = 100;
script.runInThisContext();
console.log('Current context global count:', global.count); // 101
console.log('Current context global name:', global.name);   // 'John'
