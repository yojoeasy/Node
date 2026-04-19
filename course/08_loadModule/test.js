console.log("this file is loaded");

var a = 10;
var b = 20;

console.log(a + b);

sum = (a, b) => {
    return a + b;
}

multiply = (a, b) => {
    return a * b;
}

module.exports = {
    a: a,
    b: b,
    sum: sum,
    multiply: multiply
}

