// console.time("Loop Time");

// const total = 1e10;
// const chunk = total / 4;

// // Loop 1
// for (let i = 0; i <= chunk; i++) {
//     if (i === chunk / 2) {
//         console.log("Part 1:", i);
//     }
// }

// // Loop 2
// for (let i = chunk; i <= chunk * 2; i++) {
//     if (i === chunk + chunk / 2) {
//         console.log("Part 2:", i);
//     }
// }

// // Loop 3
// for (let i = chunk * 2; i <= chunk * 3; i++) {
//     if (i === chunk * 2 + chunk / 2) {
//         console.log("Part 3:", i);
//     }
// }

// // Loop 4
// for (let i = chunk * 3; i <= total; i++) {
//     if (i === chunk * 3 + chunk / 2) {
//         console.log("Part 4:", i);
//     }
// }

// console.timeEnd("Loop Time");

// // Loop Time: 56.910s
// // this will take the time of the main thread
// // to run this in parallel we need to use worker threads
// // worker threads are not available in the browser
// // worker threads are available in node.js


// const { Worker } = require("worker_threads");
// const path = require("path");

// console.time("Parallel Execution");

// const worker1 = new Worker(path.resolve(__dirname, "05_threads/a.js"));
// const worker2 = new Worker(path.resolve(__dirname, "05_threads/b.js"));
// const worker3 = new Worker(path.resolve(__dirname, "05_threads/c.js"));
// const worker4 = new Worker(path.resolve(__dirname, "05_threads/d.js"));

// console.timeEnd("Parallel Execution");


const { Worker } = require("worker_threads");
const path = require("path");

console.time("Parallel Execution");

let completed = 0;
const totalWorkers = 4;

function onDone() {
    completed++;
    if (completed === totalWorkers) {
        console.timeEnd("Parallel Execution");
    }
}

const worker1 = new Worker(path.resolve(__dirname, "05_threads/a.js"));
const worker2 = new Worker(path.resolve(__dirname, "05_threads/b.js"));
const worker3 = new Worker(path.resolve(__dirname, "05_threads/c.js"));
const worker4 = new Worker(path.resolve(__dirname, "05_threads/d.js"));

[worker1, worker2, worker3, worker4].forEach((worker) => {
    worker.on("exit", onDone);
});