// constructor.js
var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.log = function(){
        console.log(this.name + ', ' + this.age);
    };
};

// program.js
var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

