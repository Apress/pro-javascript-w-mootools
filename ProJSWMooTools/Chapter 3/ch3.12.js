// our Person constructor
var Person = function(){};

// using the Person function as a regular function
var result = Person();
console.log(result); // undefined

// using the Person function as a constructor
var person = new Person();

console.log(typeof person); // 'object'
console.log(person instanceof Person); // true
console.log(person.constructor == Person); // true

