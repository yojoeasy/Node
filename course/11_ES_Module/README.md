# ES Modules in Node.js

Historically, Node.js used the CommonJS module system (`require()` and `module.exports`). Modern JavaScript uses **ES Modules** (ESM), which use `import` and `export`.

## How to Enable ES Modules

To use ES Modules in a Node.js project, you must tell Node that your files are ES Modules. The easiest way is to add `"type": "module"` to your `package.json` file. (This folder has a `package.json` set up to do exactly this).

Another way to opt-in to ES Modules without a `package.json` is to use the `.mjs` file extension instead of `.js`.

## Exporting & Importing

### Named Exports
You can export multiple variables or functions from a single file by putting `export` in front of them.
```javascript
export const name = "Alice";
export function sayHello() { ... }

// Importing named exports requires curly braces:
import { name, sayHello } from './myFile.js';
```

### Default Exports
You can have one "default" export per file. It represents the primary thing being exported.
```javascript
export default function main() { ... }

// Importing a default export doesn't use curly braces:
import main from './myFile.js';
```

> **⚠️ IMPORTANT:** When importing local files in Node.js ES Modules, you **must include the `.js` extension** (e.g., `import './utils.js'`). Unlike CommonJS, Node will not guess the extension for you.

---

## `__filename` and `__dirname` in ESM

In CommonJS, `__filename` (the path to the current file) and `__dirname` (the path to the current folder) are magically available globally in every file. 

**In ES Modules, `__filename` and `__dirname` DO NOT EXIST natively!**

Instead, ESM provides `import.meta.url`, which gives you the absolute `file://` URL of the current module. To get normal file paths, you must use Node's built-in `url` and `path` modules to recreate `__filename` and `__dirname`.

```javascript
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 1. Convert the file:// URL to an absolute file path
const __filename = fileURLToPath(import.meta.url);

// 2. Extract the directory path from the file path
const __dirname = dirname(__filename);
```

### Try it out!
You can see these concepts in action by exploring the code in this folder. Run `node app.js` in your terminal to see it work!
