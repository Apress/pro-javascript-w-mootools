var Person = function(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.setName = function(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

Person.prototype.setAge = function(age){
    this.age = age;
};

Person.prototype.getAge = function(){
    return this.age;
};

