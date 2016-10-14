// person.js
var Person = new Class({

    name: '',
    age: 0,

    initialize: function(name, age){
        this.name = name;
        this.age = age;
    },

    log: function(){
        console.log(this.name + ', ' + this.age);
    }

});

