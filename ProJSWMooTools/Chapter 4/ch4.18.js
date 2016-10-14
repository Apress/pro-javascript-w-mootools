var Superclass = new Class({

    initialize: function(name){
        console.log('Initializing Superclass.');
    }

});

var Subclass = new Class({

    Extends: Superclass,

    initialize: function(){
        console.log('Initializing Subclass.');
    }

});

var obj = new Subclass(); // 'Initializing Subclass.'

