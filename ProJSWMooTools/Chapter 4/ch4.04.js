var Animal = new Class({

    name: 'Animal',

    eat: function(){
        console.log(this.name + ' is eating.');
    },

    walk: function(){
        console.log(this.name + ' is walking.');
    }

});

var myAnimal = new Animal();
myAnimal.eat(); // 'Animal is eating.'
myAnimal.walk(); // 'Animal is walking.'

console.log(myAnimal instanceof Animal); // true

