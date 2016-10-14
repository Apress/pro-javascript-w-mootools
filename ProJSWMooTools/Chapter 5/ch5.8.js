var Super = new Class({

    log: function(){
        console.log('Super');
    }

});

var Mixin = new Class({

    log: function(){
        console.log('Mixin');
    }

});

var Sub = new Class({

    Implements: Mixin,

    Extends: Super

});

var obj = new Sub();
obj.log(); // ?

// -- 

var Mixin = new Class({

    log: function(){
        console.log('Mixin');
    }

});

var Sub = new Class({

    log: function(){
        console.log('Sub');
    },

    Implements: Mixin

});

var obj = new Sub();
obj.log(); // 'Mixin'
