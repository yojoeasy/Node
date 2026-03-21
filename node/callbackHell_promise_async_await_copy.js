function sum (a,b , subtract) {
  z = a + b;
  console.log(z);
  setTimeout(() => {
    subtract(z, 1,multiply);
  }, 1000);
}

function subtract(c, d, multiply) {
  y = c - d;
  console.log(y);
  setTimeout(() => {
    multiply(y, 2, divide);
  }, 1000);
}

function multiply(e, f, divide) {
  x = e * f;
  console.log(x);
  setTimeout(() => {
    divide(x, 2);
  }, 1000);
}

function divide(g, h) {
  console.log(g / h);
}

// sum(10, 5, subtract);

///////////////////////////////////////////////////////////////////////////////////////
// Modern JavaScript (ES6+) Features
///////////////////////////////////////////////////////////////////////////////////////

function sum1(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    console.log("Sum:", result);
    callback(null, result);
  }, 1000);
}

function subtract1(c, d, callback) {
  setTimeout(() => {
    const result = c - d;
    console.log("Subtract:", result);
    callback(null, result);
  }, 1000);
}

function multiply1(e, f, callback) {
  setTimeout(() => {
    const result = e * f;
    console.log("Multiply:", result);
    callback(null, result);
  }, 1000);
}

function divide1(g, h, callback) {
  setTimeout(() => {
    if (h === 0) return callback("❌ Cannot divide by zero");
    const result = g / h;
    console.log("Divide:", result);
    callback(null, result);
  }, 1000);
}

// -------------------
// Main Flow
// -------------------
// sum1(10, 5, (err, sumResult) => {
//   if (err) return console.error(err);

//   subtract1(sumResult, 1, (err, subResult) => {
//     if (err) return console.error(err);

//     multiply1(subResult, 2, (err, mulResult) => {
//       if (err) return console.error(err);

//       divide1(mulResult, 2, (err, divResult) => {
//         if (err) return console.error(err);

//         console.log("✅ Final Result:", divResult);
//       });
//     });
//   });
// });
///////////////////////////////////////////////////////////////////////////////////////

// Simulated async functions with callbacks

// --------------------------
// 2. Promise-based Example
// --------------------------
function sum2(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = a + b;
      console.log("Sum:", result);
      resolve(result);
    }, 1000);
  });
}

function subtract2(c, d) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = c - d;
      console.log("Subtract:", result);
      resolve(result);
    }, 1000);
  });
}

function multiply2(e, f) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = e * f;
      console.log("Multiply:", result);
      resolve(result);
    }, 1000);
  });
}

function divide2(g, h) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (h === 0) return reject("❌ Cannot divide by zero");
      const result = g / h;
      console.log("Divide:", result);
      resolve(result);
    }, 1000);
  });
}

// -------------------
// Main Flow
// -------------------
// sum2(20, 6)
//   .then((sumResult) => subtract2(sumResult, 1))
//   .then((subResult) => multiply2(subResult, 2))
//   .then((mulResult) => divide2(mulResult, 2))
//   .then((divResult) => {
//     console.log("✅ Final Result:", divResult);
//   })
//   .catch((err) => console.error(err));

// --------------------------
// 3. Async/Await Example
// -------------------------- 
async function main() {
  try {
    const sumResult = await sum2(20, 6);
    const subResult = await subtract2(sumResult, 1);
    const mulResult = await multiply2(subResult, 2);
    const divResult = await divide2(mulResult, 2);
    console.log("✅ Final Result:", divResult);
  } catch (err) {
    console.error(err);
  }
}
main();  