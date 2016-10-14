var Person = new Class({

    Implements: [Events, Options],

    initialize: function(options){
        this.setOptions(options);
    }

});

var sleep = function(){
    console.log('Sleeping');
};

new Person({
    onSleep: sleep
});

new Person().addEvent('sleep', sleep);
