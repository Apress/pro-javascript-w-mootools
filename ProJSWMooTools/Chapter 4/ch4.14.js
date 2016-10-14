var Person = function(name, age){
    this.data.name = name;
    this.data.age = age;
};

Person.prototype.data = {name: '', age: 0};

Person.prototype.log = function(){
    console.log(this.data.name + ', ' + this.data.age);
};

var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

var joseph = new Person('Joseph', 22);
joseph.log(); // 'Joseph, 22'

mark.log(); // 'Joseph, 22'

console.log(mark.data == joseph.data); // true

