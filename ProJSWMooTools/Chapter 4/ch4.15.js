var Person = new Class({

    data: {name: '', age: 0},

    initialize: function(name, age){
        this.data.name = name;
        this.data.age = age;
    },

    log: function(){
        console.log(this.data.name + ', ' + this.data.age);
    }

});

var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

var joseph = new Person('Joseph', 22);
joseph.log(); // 'Joseph, 22'

mark.log(); // 'Mark, 23'

console.log(mark.data == joseph.data); // false

