var Animal = function(name){
    this.name = name;
};

Animal.prototype.eat = function(){
    console.log('The ' + this.name + ' is eating.');
};

var cat = new Animal('cat');
cat.eat(); // ‘The cat is eating.’

var bird = new Animal('bird');
bird.eat(); // ‘The bird is eating.’

