console.log("a.js is running");

for (let i = 0; i < 2500000000; i++) {
    if (i === 2500000000 / 2) {
        console.log("a.js:", i);
    }
}

console.log("a.js is done");
