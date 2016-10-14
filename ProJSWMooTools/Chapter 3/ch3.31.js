var Animal = function(){};

var cat = new Animal();

console.log(cat instanceof Animal); // true
console.log(cat instanceof Object); // true
console.log(typeof cat.hasOwnProperty); // 'function'

