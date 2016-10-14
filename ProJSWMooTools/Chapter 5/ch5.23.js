var Person = new Class({

    // Properties
    name: '',
    age: 0,

    // Methods
    initialize: function(name, age){
        this.name = name;
        this.age = age;
        this.format();
    },

    log: function(){
        console.log(this.name + ‘, ‘ + this.age);
    },

    format: function(){
        this.name = this.name.capitalize();
        this.age = parseInt(this.age);
    }

});

// Creating a new Person instance
var mark = new Person(‘mark’, ’23’);
mark.log(); // ’Mark, 23’

mark.format(); // returns nothing
