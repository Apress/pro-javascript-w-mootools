var Person = new Class({

    Implements: Options,

    initialize: function(options){
        this.setOptions(options);
    },

    log: function(){
        console.log(this.options.name + ', ' + this.options.age);
    }

});

var mark = new Person({name: 'Mark', age: 23});
mark.log(); // 'Mark, 23'
