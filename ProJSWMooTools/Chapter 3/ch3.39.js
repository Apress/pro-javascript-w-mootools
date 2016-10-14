var Animal = {
    name: 'animal',
    eat: function(){
        console.log('The ' + this.name + ' is eating.');
    }
};

var Cat = Object.create(Animal);
Cat.name = 'cat';

var myCat = Object.create(Cat);
myCat.eat(); // 'The cat is eating.'

