/**
 * Difference between CommonJS and ES Modules in Node.js
 * 
 * -----------------------------------------------------------------------------
 * 1. Syntax:
 *    - CommonJS: Uses `require()` for importing and `module.exports` or `exports` for exporting.
 *    - ES Modules (ESM): Uses `import` for importing and `export` for exporting.
 * 
 * 2. Execution / Loading:
 *    - CommonJS: Synchronous loading. It resolves and loads modules at runtime, step-by-step. 
 *      Ideal for server-side where files are loaded from the local disk.
 *    - ESM: Asynchronous parsing. It statically analyzes imports/exports before executing the code. 
 *      This allows tools to easily perform "tree-shaking" (removing unused code).
 * 
 * 3. Globals & Scope:
 *    - CommonJS: Globals like `__dirname`, `__filename`, `require`, and `module` 
 *      are automatically injected and available in every file.
 *    - ESM: These globals are NOT available by default. Instead, file paths are 
 *      accessed using `import.meta.url`.
 * 
 * 4. Strict Mode:
 *    - CommonJS: Runs in non-strict mode by default (unless `"use strict";` is declared).
 *    - ESM: Implicitly runs in Strict Mode (`"use strict"` is automatic).
 * 
 * 5. Top-level Await:
 *    - CommonJS: Does not support top-level `await`. `await` must be inside an `async` function.
 *    - ESM: Supports top-level `await` out of the box.
 * 
 * 6. Usage in Node.js:
 *    - CommonJS: The traditional default module system in Node.js (often using `.js` or `.cjs`).
 *    - ESM: To use it, you must either set `"type": "module"` in your `package.json`, 
 *      or use the `.mjs` file extension.
 * -----------------------------------------------------------------------------
 */

// ==========================================
// EXAMPLES
// ==========================================

/* 
  ===========================================
  1. COMMONJS EXAMPLE 
  ===========================================
*/

// --- math.cjs (Exporting) ---
/*
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  
  // Exporting multiple functions as an object
  module.exports = { 
    add, 
    subtract 
  };
*/

// --- app.cjs (Importing) ---
/*
  // Importing using require()
  const math = require('./math.cjs');
  
  console.log(math.add(5, 3)); // 8
  console.log(math.subtract(10, 4)); // 6
*/


/* 
  ===========================================
  2. ES MODULE EXAMPLE 
  ===========================================
*/

// --- math.mjs (Exporting) ---
/*
  // Named exports
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;
  
  // Default export (only one per file)
  export default function multiply(a, b) {
    return a * b;
  }
*/

// --- app.mjs (Importing) ---
/*
  // Importing named exports (in curly braces) and default export
  import multiply, { add, subtract } from './math.mjs';
  
  console.log(add(5, 3)); // 8
  console.log(subtract(10, 4)); // 6
  console.log(multiply(5, 3)); // 15
*/
