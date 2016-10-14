var Animal = new Class({

    name: '',

    initialize: function(name){
        this.name = name;
    },

    eat: function(){
        console.log('The ' + this.name + ' is eating.');
    }

});

var Cat = new Class({

    Extends: Animal,

    initialize: function(){
        this.name = 'cat';
    },

    meow: function(){
        console.log('Meow!');
    }

});

var cat = new Cat();
cat.eat(); // ‘The cat is eating.’
cat.meow(); // 'Meow!'

