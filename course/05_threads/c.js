console.log("c.js is running");

for (let i = 5000000000; i < 7500000000; i++) {
    if (i === 5000000000 + 2500000000 / 2) {
        console.log("c.js:", i);
    }
}

console.log("c.js is done");