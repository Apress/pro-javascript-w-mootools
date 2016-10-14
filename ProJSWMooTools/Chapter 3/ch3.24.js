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

// Add a new eat method to cat
cat.eat = function(){
    console.log('Meow. Cat is eating!');
};

// Add an eat method to Animal
Animal.prototype.eat = function(){
    console.log(this.name + 'is eating.');
};

cat.eat(); // 'Meow. Cat is eating!'

