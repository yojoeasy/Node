const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('greet', () => {
  console.log('Hello! Event triggered.');
});
eventEmitter.emit('greet');


eventEmitter.on('sayMyName', (name) => {
  console.log(`My name is ${name}`);
});
eventEmitter.emit('sayMyName', 'Yogesh');
// Output: My name is Yogesh

eventEmitter.once('welcome', () => {
  console.log('Welcome! This will run only once.');
});

eventEmitter.emit('welcome'); // Runs
eventEmitter.emit('welcome'); // Ignored

eventEmitter.on('dataReceived', (data) => {
  console.log(`Data received: ${data}`);
});
eventEmitter.emit('dataReceived', 'Sample Data 1');
eventEmitter.emit('dataReceived', 'Sample Data 2');

eventEmitter.removeAllListeners('dataReceived');
eventEmitter.emit('dataReceived', 'Sample Data 3'); // No output



eventEmitter.on('cleanUp', () => console.log('Listener A'));
eventEmitter.on('cleanUp', () => console.log('Listener B'));
eventEmitter.removeAllListeners('cleanUp');
eventEmitter.emit('cleanUp'); // No output


const fn = () => console.log('Testing listeners');
eventEmitter.on('checkListeners', fn);
console.log(eventEmitter.listeners('checkListeners')); 
// [ [Function: fn] ]

eventEmitter.on('countMe', () => {});
eventEmitter.on('countMe', () => {});
console.log(eventEmitter.listenerCount('countMe')); 
// 2


eventEmitter.on('first', () => {});
eventEmitter.on('second', () => {});
console.log(eventEmitter.eventNames()); 
// [ 'first', 'second' ]


eventEmitter.on('order', () => console.log('Listener 2'));
eventEmitter.prependListener('order', () => console.log('Listener 1'));
eventEmitter.emit('order');
// Output:
// Listener 1
// Listener 2


console.log(eventEmitter.getMaxListeners()); // Default = 10
eventEmitter.setMaxListeners(20);
console.log(eventEmitter.getMaxListeners()); // 20
eventEmitter.setMaxListeners(0); // Unlimited
console.log(eventEmitter.getMaxListeners()); // 0 (unlimited)



