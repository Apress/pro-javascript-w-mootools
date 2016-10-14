// Animal constructor
var Animal = function(name){
    this.name = name;
};

// Animal prototype
Animal.prototype.walk = function(){
    console.log(this.name + ' is walking.');
};

// Animal instance
var cat = new Animal('Cat');
cat.walk(); // 'Cat is walking.'

// Does an Animal have an eat method?
console.log(typeof cat.eat); // undefined, so no.

// Add an eat method to Animal
Animal.prototype.eat = function(){
    console.log(this.name + ' is eating.');
};

console.log(typeof cat.eat); // 'function'
cat.eat(); // 'Cat is eating'

