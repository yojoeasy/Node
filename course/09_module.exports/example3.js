// If you want to export an entire object or a function, you MUST reassign `module.exports`.

module.exports = {
    greeting: "Hello World",
    sayHello: () => console.log("Hello!")
};

// `exports` still points to the original empty object `{}`, but `module.exports` is now our new object.
console.log("example3.js: module.exports === exports?", module.exports === exports);
