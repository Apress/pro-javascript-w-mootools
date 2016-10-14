var Caller = new Class({

    Implements: Events,

    busy: false,

    call: function(name){
        this.busy = true;
        this.fireEvent('callStart', name);

        (function(){
            this.busy = false;
            this.fireEvent('callEnd', name);
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

        this.caller.addEvent('callStart', this.display.callStart);
        this.caller.addEvent('callEnd', this.display.callEnd);
    },

    call: function(name){
        this.caller.call(name);
    }

});

