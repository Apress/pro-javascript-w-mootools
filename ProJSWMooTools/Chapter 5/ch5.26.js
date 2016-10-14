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
    }.protect()

});

var Mark = new Class({

    Extends: Person,

    initialize: function(){
        this.name = ’mark’;
        this.age = ’23’;
        this.format();
    }

});

// Creating a new Person instance
var mark = new Mark();
mark.log(); // ’Mark, 23’

mark.format(); // ’Error: The method “format” cannot be called.’
