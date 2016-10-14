var Animal = function(){};

Animal.prototype.log = function(){
    console.log('This is an Animal.');
};

Animal.prototype.eat = function(){
    console.log('The animal is eating.');
};

var Cat = function(){};

Cat.prototype = new Animal();

Cat.prototype.eat = function(){
    Animal.prototype.eat.apply(this);
    console.log('The cat is eating.');
};

var tibbs = new Cat();
tibbs.log(); // 'This is an Animal.'
tibbs.eat();
// 'The animal is eating.'
// 'The cat is eating.'

