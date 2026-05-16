const vm = require('vm');

console.log('--- vm.createContext & vm.runInContext ---');

// If you need to run multiple scripts in the same sandbox environment, 
// it's more efficient to create the context once using vm.createContext() 
// and then use vm.runInContext() repeatedly.

const sandbox = { globalVar: 1 };

console.log('Original sandbox state:', sandbox);

// "Contextify" the object
vm.createContext(sandbox);

// Now we can run multiple scripts in the same context environment
vm.runInContext('globalVar *= 2;', sandbox);
console.log('After first script:', sandbox); // { globalVar: 2 }

vm.runInContext('globalVar += 5;', sandbox);
console.log('After second script:', sandbox); // { globalVar: 7 }

// You can also check if an object has been contextified:
console.log('\nIs sandbox a context?', vm.isContext(sandbox));
