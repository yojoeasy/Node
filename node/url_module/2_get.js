const { URL } = require('url');

const myUrl = new URL('https://example.com/page?name=Yogesh&age=27');

console.log(myUrl.searchParams.get('name')); // Yogesh
console.log(myUrl.searchParams.get('age'));  // 27

// Add new param
myUrl.searchParams.append('city', 'Delhi');
console.log(myUrl.toString()); 
// https://example.com/page?name=Yogesh&age=27&city=Delhi
// Note: The order of parameters may vary
// depending on the environment.
console.log(myUrl.searchParams.get('city')); // Delhi