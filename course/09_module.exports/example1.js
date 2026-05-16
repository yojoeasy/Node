// Both module.exports and exports point to the same object initially in memory.
// Adding properties to `exports` will also add them to `module.exports` because they reference the same object.

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// To prove they are the same reference:
console.log("example1.js: module.exports === exports?", module.exports === exports);
