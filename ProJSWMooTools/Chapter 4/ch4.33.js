var MixinSuper = new Class({

    log: function(){
        console.log('MixinSuper');
    }

});

var Mixin = new Class({

    Extends: MixinSuper

    log: function(){
        this.parent();
    }

});

var Super = new Class({

    log: function(){
        console.log('Super');
    }

});

var Sub = new Class({

    Extends: Super,

    Implements: Mixin

});

new Sub().log(); // 'MixinSuper'

