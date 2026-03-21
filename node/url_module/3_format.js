const url = require('url');

const obj = {
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/about',
  query: { page: 1, sort: 'asc' }
};

console.log(url.format(obj));
// https://example.com/about?page=1&sort=asc



console.log(url.resolve('https://example.com/dir/', '../new'));
// https://example.com/new
console.log(url.resolve('https://example.com/dir/', '/absolute'));
// https://example.com/absolute
console.log(url.resolve('https://example.com/dir/', 'subdir/file'));
// https://example.com/dir/subdir/file

