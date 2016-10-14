// a global object
var fruit = 'banana';

// our constructor
var Person = function(){
    console.log(this.fruit);
};

// Person as a regular function
Person(); // logs 'banana'

// Person as a constructor
new Person(); // logs undefined

