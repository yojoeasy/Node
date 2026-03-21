const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World! This is an Express server.'));
app.listen(8080);
console.log('Server is running on http://localhost:8080');




const app1 = express();
// Home route
app1.get('/', (req, res) => res.send('Hello World! This is an Express server.'));

// About route
app1.get('/about', (req, res) => res.send('About page! This is an Express server.'));

// Start server
app1.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
