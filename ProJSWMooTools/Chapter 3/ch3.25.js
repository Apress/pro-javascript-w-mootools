var Animal = function(){};
Animal.prototype.walk = function(){};

var dog = new Animal();

var cat = new Animal();
cat.walk = function(){};

console.log(cat.hasOwnProperty('walk')); // true
console.log(dog.hasOwnProperty('walk')); // false

