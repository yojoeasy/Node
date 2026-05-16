// Reassigning `exports` completely breaks the reference!
// Now `exports` points to a NEW object in memory, but Node.js still ONLY returns `module.exports`.

exports = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

// They are no longer the same!
console.log("example2.js: module.exports === exports?", module.exports === exports);
