// // Problem: Nested Callbacks (Callback Hell)
// getUser(userId, (err, user) => {
//   if (err) return handleError(err);
//   getOrders(user.id, (err, orders) => {
//     if (err) return handleError(err);
//     processOrders(orders, (err) => {
//       if (err) return handleError(err);
//       console.log('All done!');
//     });
//   });
// });

// // Solution: Use Promises
// getUser(userId)
//   .then(user => getOrders(user.id))
//   .then(orders => processOrders(orders))
//   .then(() => console.log('All done!'))
//   .catch(handleError);


// // Even Better: Async/Await
// async function processUser(userId) {
//   try {
//     const user = await getUser(userId);
//     const orders = await getOrders(user.id);
//     await processOrders(orders);
//     console.log('All done!');
//   } catch (err) {
//     handleError(err);
//   }
// }  



// Simulated async functions (mock database calls)

// Callback style
function getUser(userId, callback) {
  setTimeout(() => {
    if (!userId) return callback('User ID is missing');
    callback(null, { id: userId, name: 'Yogesh Joshi' });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    if (!userId) return callback('User ID not valid');
    callback(null, ['Cake Order', 'Pastry Order']);
  }, 1000);
}

function processOrders(orders, callback) {
  setTimeout(() => {
    if (!orders || orders.length === 0) return callback('No orders found');
    console.log('Processing orders:', orders);
    callback(null);
  }, 1000);
}

function handleError(err) {
  console.error('❌ Error:', err);
}

// --------------------------
// 1. Callback Hell Example
// --------------------------
const userId = 1;
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    processOrders(orders, (err) => {
      if (err) return handleError(err);
      console.log('✅ All done with Callbacks!');
    });
  });
});

// --------------------------
// 2. Promise-based Example
// --------------------------
function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

function getOrdersPromise(userId) {
  return new Promise((resolve, reject) => {
    getOrders(userId, (err, orders) => {
      if (err) reject(err);
      else resolve(orders);
    });
  });
}

function processOrdersPromise(orders) {
  return new Promise((resolve, reject) => {
    processOrders(orders, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

getUserPromise(userId)
  .then(user => getOrdersPromise(user.id))
  .then(orders => processOrdersPromise(orders))
  .then(() => console.log('✅ All done with Promises!'))
  .catch(handleError);

// --------------------------
// 3. Async/Await Example
// --------------------------
async function processUser(userId) {
  try {
    const user = await getUserPromise(userId);
    const orders = await getOrdersPromise(user.id);
    await processOrdersPromise(orders);
    console.log('✅ All done with Async/Await!');
  } catch (err) {
    handleError(err);
  }
}

processUser(userId);


