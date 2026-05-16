# Node.js `vm` (Virtual Machine) Module

The `vm` module enables compiling and running JavaScript code within V8 Virtual Machine contexts. It provides a way to execute JavaScript code dynamically in a different scope or context than the current one.

> **⚠️ WARNING:** The `vm` module is **NOT** a security mechanism. Do not use it to run untrusted code. It is easy for malicious code to break out of the sandbox. If you need to run untrusted code, use external isolated processes or containers.

## Key Concepts

- **Context:** An environment (essentially a global object) in which a script can run.
- **Contextify:** The process of taking a regular JavaScript object and making it a V8 context. This allows the object to act as the `global` object for scripts running within that specific context.

## Core Functions & Classes

1. **`vm.runInThisContext(code)`**: Runs code in the *current* global context. It can access and modify global variables, but it **cannot** access local variables from the scope where it was called.
2. **`vm.runInNewContext(code, sandbox)`**: Compiles code, creates a brand new context using the `sandbox` object as its global object, and runs the code within it.
3. **`vm.createContext(sandbox)`**: "Contextifies" an object. This prepares the object so it can be passed to `vm.runInContext()`. This is useful if you want to run multiple scripts in the exact same sandbox state.
4. **`vm.runInContext(code, contextifiedObject)`**: Runs code in a context that was previously created via `vm.createContext()`.
5. **`vm.Script`**: A class that pre-compiles code. This is highly recommended if you plan to run the same code multiple times, as it is much faster than compiling the string on every execution.
6. **`vm.compileFunction(code, params)`**: Compiles a string of JavaScript code into a standard JavaScript function.

You can run the examples in this directory using Node (e.g., `node 1_runInThisContext.js`) to see exactly how they work!
