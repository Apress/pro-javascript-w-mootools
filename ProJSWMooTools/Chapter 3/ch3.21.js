// person.js
var Person = function(name, age){
    this.name = name;
    this.age = age;
};

// program.js
Person.prototype.log = function(){
    console.log(this.name + ', ' + this.age);
};

var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

var joseph = new Person('Joseph', 22);
joseph.log(); // 'Joseph, 22'

