new Type('Array', Array);

console.log(instanceOf(Array, Type)); // true
console.log(instanceOf(Array, Function)); // true
console.log(instanceOf(Array, Object)); // true
