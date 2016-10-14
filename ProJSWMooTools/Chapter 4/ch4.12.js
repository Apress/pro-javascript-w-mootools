var data = {name: '', age: 0};

var Person = new Class({

    data: data,

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

data.name = 'Joseph';
data.age = 22;

mark.log(); // 'Mark, 23'

console.log(data == Person.prototype.data); // false

