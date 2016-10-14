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
