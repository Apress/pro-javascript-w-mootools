var data = {name: '', age: 0};

var Person = function(name, age){
    this.data.name = name;
    this.data.age = age;
};

Person.prototype.data = data;

Person.prototype.log = function(){
    console.log(this.data.name + ', ' + this.data.age);
};

var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

data.name = 'Joseph';
data.age = 22;

mark.log(); // 'Joseph, 22'

console.log(data == Person.prototype.data); // true

