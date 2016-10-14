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

    Extends: Super,

    Implements: Mixin

});

var obj = new Sub();
obj.log(); // ?
