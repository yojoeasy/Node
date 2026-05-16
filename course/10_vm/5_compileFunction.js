const vm = require('vm');

console.log('--- vm.compileFunction ---');

// vm.compileFunction takes a string of code and turns it into a standard JavaScript function.
// You can define the names of the arguments the function should accept.

const code = `
  // The variables a and b will come from the parameters
  // The variable multiplier comes from the context
  return (a + b) * multiplier;
`;

// Define the names of the parameters the function will receive
const params = ['a', 'b'];

// Define a parsing context (a global object for the compiled function)
const parsingContext = vm.createContext({
  multiplier: 10
});

// Compile the string into a real callable function
const fn = vm.compileFunction(code, params, {
  parsingContext: parsingContext
});

// Now we can call the function just like a regular JS function!
const result1 = fn(5, 5); 
console.log('Result of fn(5, 5):', result1); // (5 + 5) * 10 = 100

const result2 = fn(2, 3);
console.log('Result of fn(2, 3):', result2); // (2 + 3) * 10 = 50
