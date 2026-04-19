const { clear } = require("console");
const path = require("path");
const vm = require("vm");

fs = require("fs");
loadFile = loadModule('./load_file.yog');
loadFile = loadModule1('./load_file.js');
loadFile = accurateLoadModule('./test.js');

console.log(loadFile);

console.log(loadFile.sum(1, 2));
console.log(loadFile.multiply(1, 2));

function loadModule(filename) {
    const fileContent = fs.readFileSync(filename, 'utf-8');
    eval(fileContent);
}

function loadModule1(filename) {
    const fileContent = fs.readFileSync(filename).toString();
    return (function (send) {
        eval(fileContent);
        return send;
    })({})
}

// An accurate simulation of the standard Node.js CommonJS module loader
function accurateLoadModule(requestPath) {
    // 1. Resolve absolute path
    // Note: Node.js resolves relative to the caller's directory, we simulate it using __dirname here for simplicity
    const absolutePath = path.resolve(__dirname, requestPath);

    // 2. Setup module cache to prevent redundant loading and circular dependency issues
    if (!accurateLoadModule.cache) {
        accurateLoadModule.cache = {};
    }
    if (accurateLoadModule.cache[absolutePath]) {
        return accurateLoadModule.cache[absolutePath].exports;
    }

    // 3. Read file content
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');

    // 4. Wrap the module code into a function to provide private scope and standard variables
    const wrapper = [
        '(function (exports, require, module, __filename, __dirname) { \n',
        '\n});'
    ];
    const wrappedContent = wrapper[0] + fileContent + wrapper[1];

    // 5. Compile the string into an executable function using 'vm' (safer and cleaner than eval)
    const compiledFunction = vm.runInThisContext(wrappedContent, {
        filename: absolutePath
    });

    // 6. Create the module object
    const module = {
        exports: {},
        id: absolutePath,
        loaded: false
    };

    // Cache the module early, before execution, to handle circular dependencies correctly
    accurateLoadModule.cache[absolutePath] = module;

    // 7. Extract the directory name for __dirname
    const dirname = path.dirname(absolutePath);

    // 8. Execute the compiled function, passing the standard CommonJS variables
    compiledFunction.call(
        module.exports,       // 'this' points to module.exports
        module.exports,       // 'exports'
        accurateLoadModule,   // 'require' - allows nested requiring using our own loader
        module,               // 'module'
        absolutePath,         // '__filename'
        dirname               // '__dirname'
    );

    module.loaded = true;

    // 9. Return the exported content
    return module.exports;
}