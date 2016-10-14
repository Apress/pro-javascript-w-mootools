var Person = function(name, age){
    this.name = name;
    this.age = age;
};

// Properties
Person.prototype.name = ‘’;
Person.prototype.age = 0;

// Methods
Person.prototype.log = function(){
    console.log(this.name + ’, ‘ + this.age);
};

// Creating a new Person instance
var mark = new Person("Mark", 23);
mark.log(); // ‘Mark, 23’

