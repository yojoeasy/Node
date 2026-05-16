const vm = require('vm');

console.log('--- vm.runInNewContext ---');

// vm.runInNewContext creates a new V8 context, contextifies the passed object (if any),
// and then runs the code inside that fresh new context.

// This is our "sandbox" object. Inside the vm, this object will be the `global` object.
const sandbox = {
  animal: 'cat',
  count: 2
};

console.log('Sandbox before:', sandbox);

// The code runs in a separate context. It has NO access to the outer global scope
// or outer local variables. It only knows about `animal` and `count`.
vm.runInNewContext('count += 1; name = "kitty"', sandbox);

console.log('Sandbox after:', sandbox);
// Output: { animal: 'cat', count: 3, name: 'kitty' }

// Notice how 'name' was added to the sandbox object because assigning a variable 
// without 'let'/'const'/'var' inside the VM creates a global property in that context.
