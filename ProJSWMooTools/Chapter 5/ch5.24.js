var Person = (function(){

    // Our "private" method
    var format = function(){
        this.name = this.name.capitalize();
        this.age = parseInt(this.age);
    };

    // Our class
    return new Class({

        // Properties
        name: '',
        age: 0,

        // Methods
        initialize: function(name, age){
            this.name = name;
            this.age = age;
            format.call(this);
        },

        log: function(){
            console.log(this.name + ‘, ’ + this.age);
        }

    });

})();

// Creating a new Person instance
var mark = new Person(‘mark’, ’23’);
mark.log(); // ’Mark, 23’

console.log(typeof mark.format); // ’undefined’
