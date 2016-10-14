var Person = function(name, age){
    this.name = name;
    this.age = age;
};

var mark = new Person('Mark', 23);
var joseph = new Person('Joseph', 22);
var andrew = new Person('Andrew', 21);

console.log(mark.name); // 'Mark'
console.log(joseph.age); // 22
console.log(andrew.name + ', ' + andrew.age); // 'Andrew, 21'

