const ex1 = require('./example1');
const ex2 = require('./example2');
const ex3 = require('./example3');

console.log("\n--- Output ---");

// Example 1 works perfectly
console.log("Example 1 (exports.add):", ex1.add(5, 5));

// Example 2 is empty! The reassignment failed to export anything.
console.log("Example 2 (exports re-assigned):", ex2);

// Example 3 works perfectly
console.log("Example 3 (module.exports re-assigned):", ex3.greeting);
