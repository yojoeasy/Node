// Variables (let, const, var)
let name = 'Node.js';
const version = 20;
console.log(`Running ${name} version ${version}`); // Running Node.js version 20

// Function declaration
function greet(user) {
  return `Hello, ${user}!`; // Template literal (ES6)
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

console.log(greet('Developer')); // Hello, Developer!
console.log(add(5, 3)); // 8

///////////////////////////////////////////////////////////////////////////////////////
// Object
const user = {
  name: 'Alice',
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Array
const colors = ['red', 'green', 'blue'];

// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
console.log(lengths); // [3, 5, 4]

// Destructuring (ES6+)
const { name: userName, age } = user;
console.log(userName, age); // Alice 25

// Spread operator (ES6+)
const moreColors = [...colors, 'yellow', 'purple'];
console.log(moreColors); // ['red', 'green', 'blue', 'yellow', 'purple']


// Class (ES6+)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }     
    introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person('Bob', 30);
person1.introduce(); // My name is Bob and I'm 30 years old.
///////////////////////////////////////////////////////////////////////////////////////

// 1. Callbacks (traditional)
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received!');
  }, 2000);
}
fetchData((data) => {
  console.log(data);
}); // Data received! (after 2 seconds)

// 2. Promises (ES6+)
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000);
  });
};

// 3. Async/Await (ES8+)
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData(); // Call the async function