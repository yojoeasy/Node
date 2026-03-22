console.log("b.js is running");

for (let i = 2500000000; i < 5000000000; i++) {
    if (i === 2500000000 + 2500000000 / 2) {
        console.log("b.js:", i);
    }
}

console.log("b.js is done");