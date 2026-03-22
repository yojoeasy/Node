console.log("d.js is running");

for (let i = 7500000000; i < 10000000000; i++) {
    if (i === 7500000000 + 2500000000 / 2) {
        console.log("d.js:", i);
    }
}

console.log("d.js is done");