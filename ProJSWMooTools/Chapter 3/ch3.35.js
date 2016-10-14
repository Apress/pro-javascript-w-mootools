var Animal = function(name){
    this.name = name;
};

Animal.prototype.eat = function(){
    console.log('The ' + this.name + 'is eating.');
};

var Cat = function(){};

Cat.prototype = new Animal('cat');

Cat.prototype.meow = function(){
    console.log('Meow!');
};

var Persian = function(){
    this.name = 'persian cat';
};

Persian.prototype = new Cat();

Persian.prototype.meow = function(){
    console.log('Meow...');
};

Persian.prototype.setColor = function(color){
    this.color = color;
};

Persian.prototype.getColor = function(){
    return this.color;
};

var king = new Persian();
king.setColor('black');
king.getColor(); // 'black'
king.eat(); // 'The persian cat is eating.'
king.meow(); // 'Meow...'

console.log(king instanceof Animal); // true
console.log(king instanceof Cat); // true
console.log(king instanceof Persian); // true

