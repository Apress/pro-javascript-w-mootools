var Phone = new Class({

    Implements: Chain,

    busy: false,

    call: function(name){
        if (this.busy){
            var bound = this.call.bind(this, name);
            this.chain(bound);
            return this;
        }

        console.log('Calling ' + name);
        this.busy = true;

        (function(){
            console.log('End call to ' + name);
            this.busy = false;
            this.callChain();
        }).delay(5000, this);

        return this;
    }

});

var phone = new Phone();
phone.call('Tim');
phone.call('Chris');
