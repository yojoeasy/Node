function sum(...nums) {
    return nums.reduce((curr, acc) => curr + acc, 0);
}

console.log("first this loaded");

module.exports = sum;