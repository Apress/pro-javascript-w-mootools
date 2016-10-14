// a basic object
var obj = new Object();

console.log(typeOf(obj.constructor));    // 'function'
console.log(typeOf(obj.hasOwnProperty)); // 'function'

for (var key in obj) console.log(key);
