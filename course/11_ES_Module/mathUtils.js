// Exporting variables and functions in ES Modules

// 1. Named Exports
// You can have as many named exports as you want.
export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// 2. Default Export
// You can only have ONE default export per file.
export default function multiply(a, b) {
    return a * b;
}
