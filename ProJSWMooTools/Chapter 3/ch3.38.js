var Animal = {
    name: 'animal',
    eat: function(){
        console.log('The ' + this.name + ' is eating.');
    }
};

var Cat = {name: 'cat'};
Cat.__proto__ = Animal;

var myCat = {};
myCat.__proto__ = Cat;

myCat.eat(); // 'The cat is eating.'

