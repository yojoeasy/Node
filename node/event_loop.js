// How the Event Loop Works
// Node.js follows these steps to handle operations:

// Execute the main script (synchronous code)
// Process any microtasks (Promises, process.nextTick)
// Execute timers (setTimeout, setInterval)
// Run I/O callbacks (file system, network operations)
// Process setImmediate callbacks
// Handle close events (like socket.on('close'))


console.log('1. Start');

// Next tick queue
process.nextTick(() => console.log('2. Next tick'));

// Microtask queue (Promise)
Promise.resolve().then(() => console.log('3. Promise'));

// Timer phase
setTimeout(() => console.log('4. Timeout'), 0);

// Check phase
setImmediate(() => console.log('5. Immediate'));

console.log('6. End');
// Expected output order:
// 1. Start
// 6. End   
// 2. Next tick
// 3. Promise
// 4. Timeout
// 5. Immediate