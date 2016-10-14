if (!Object.create) Object.create = function(proto){
    var Intermediate = function(){};
    Intermediate.prototype = proto;
    return new Intermediate();
};

var Animal = {
    name: 'animal',
    eat: function(){
        console.log('The ' + this.name + ' is eating.');
    }
};

var cat = Object.create(Animal);

console.log(typeof cat.purr); // 'undefined'

Animal.purr = function(){};

console.log(typeof cat.purr); // 'function'

