var Animal = function(name){
    this.name = name;
};

Animal.prototype.eat = function(){
    console.log('The ' + this.name + ' is eating.');
};

var Cat = function(){};

Cat.prototype = new Animal('cat');

Cat.prototype.meow = function(){
    console.log('Meow!');
};

var cat = new Cat();
cat.eat(); // ‘The cat is eating.’
cat.meow(); // 'Meow!'	

