var Animal = new Class({

    name: '',

    initialize: function(name){
        this.name = name;
    }

});

var Cat = new Class({

    Extends: Animal,

    initialize: function(){
        this.name = 'cat';
    }

});

console.log(typeof Animal.parent); // 'undefined'
console.log(typeof Cat.parent); // 'function'
console.log(Cat.parent == Animal); // true

