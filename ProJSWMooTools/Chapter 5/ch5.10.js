var Phone = new Class({

    busy: false,

    call: function(name){
        if (this.busy) return this;

        console.log('Calling ' + name);
        this.busy = true;

        (function(){
            console.log('End call to ' + name);
            this.busy = false;
        }).delay(5000, this);

        return this;
    }

});

var phone = new Phone();
phone.call('Tim');
phone.call('Chris');
