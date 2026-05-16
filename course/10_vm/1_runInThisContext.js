const vm = require('vm');

console.log('--- vm.runInThisContext ---');

let localVar = 'initial value';
global.globalVar = 0;

console.log('Before execution:');
console.log('localVar:', localVar);
console.log('globalVar:', globalVar);

// runInThisContext executes the code in the global context of the current V8 isolate.
// IMPORTANT: It can access global variables but NOT local variables.
try {
  vm.runInThisContext('globalVar += 1; localVar = "changed";');
} catch (err) {
  console.log('\nError caught because localVar is not defined in the global scope:');
  console.error(err.message);
}

// Let's run a code string that only touches the global variable
vm.runInThisContext('globalVar += 10;');

console.log('\nAfter execution:');
console.log('globalVar:', globalVar); // Will be 10, because it was successfully incremented
console.log('localVar:', localVar);   // 'initial value' (code could not access/change it)
