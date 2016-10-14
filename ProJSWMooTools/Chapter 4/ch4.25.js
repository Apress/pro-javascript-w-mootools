var Animal = new Class({

    log: function(){
        console.log('This is an Animal.');
    },

    eat: function(){
        console.log('The animal is eating.');
    }

});

var Cat = new Class({

    Extends: Animal,

    eat: function(){
        this.parent();
        console.log('The cat is eating.');
    }

});

var tibbs = new Cat();
tibbs.log(); // 'This is an Animal.'
tibbs.eat();
// 'The animal is eating.'
// 'The cat is eating.'

