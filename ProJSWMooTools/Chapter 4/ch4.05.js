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

var mark = new Person(‘Mark‘, 23);
console.log(typeof mark.initialize); // 'function'

console.log(typeof Person); // 'function'
console.log(typeof Person.prototype.initialize); // 'function'

