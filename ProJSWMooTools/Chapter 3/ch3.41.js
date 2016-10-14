var Animal = {
    name: 'animal',
    eat: function(){
        console.log('The ' + this.name + ' is eating.');
    }
};

var AnimalProto = function(){};
AnimalProto.prototype = Animal;

var cat = new AnimalProto();

console.log(typeof cat.purr); // 'undefined'

Animal.purr = function(){};

console.log(typeof cat.purr); // 'function'

