var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.log = function(){
        console.log(this.name + ', ' + this.age);
    };
};

var mark = new Person('Mark', 23);
var joseph = new Person('Joseph', 22);
var andrew = new Person('Andrew', 21);

mark.log(); // 'Mark, 23'
joseph.log(); // 'Joseph, 22'
andrew.log(); // 'Andrew, 21'

