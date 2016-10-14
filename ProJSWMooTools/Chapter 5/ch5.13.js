var Caller = new Class({

    busy: false,

    call: function(name){
        this.busy = true;

        (function(){
            this.busy = false;
        }).delay(5000, this);

        return this;
    }

});

var Display = new Class({

    callStart: function(name){
        console.log('Calling ' + name);
    },

    callEnd: function(){
        console.log('End call to ' + name);
    }

});

var Phone = new Class({

    initialize: function(){
        this.caller = new Caller();
        this.display = new Display();
    },

    call: function(name){
        this.caller.call(name);
    }

});
