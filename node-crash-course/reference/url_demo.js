const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host);
// Host name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search)
// Params Object
console.log(myUrl.searchParams)
// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
// Loop params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))