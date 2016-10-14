var Person = function(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.log = function(){
    console.log(this.name + ', ' + this.age);
};

var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

