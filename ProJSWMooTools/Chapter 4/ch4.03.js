var Person = new Class({

    // Properties
    name: '',
    age: 0,

    // Methods
    initialize: function(name, age){
        this.name = name;
        this.age = age;
    },

    log: function(){
        console.log(this.name + ‘, ‘ + this.age);
    }

});

// Creating a new Person instance
var mark = new Person(‘Mark‘, 23);
mark.log(); // ‘Mark, 23’

