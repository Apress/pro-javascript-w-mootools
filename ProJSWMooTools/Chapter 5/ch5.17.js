var Person = new Class({

    Implements: Options,

    options: {
        name: 'Blah',
        age: 0
    },

    initialize: function(options){
        this.setOptions(options);
    },

    log: function(){
        console.log(this.options.name + ', ' + this.options.age);
    }

});

new Person({name: 'Tim', age: 21}).log(); // 'Tim, 21'
new Person({name: 'Chris'}).log(); // 'Chris, 0'
new Person().log(); // 'Blah, 0'
