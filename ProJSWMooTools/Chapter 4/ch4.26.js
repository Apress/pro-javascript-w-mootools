var Animal = new Class({

    name: '',

    initialize: function(name){
        this.name = name;
    },

    getName: function(){
        return this.name;
    }

});

var Cat = new Class({

    Extends: Animal,

    initialize: function(name){
        this.parent(name);
        this.name += ', the Cat.';
    }

});

var tibbs = new Cat('Tobias');
console.log(tibbs.getName()); // 'Tobias, the Cat.'

