var Person = function(name, age){

    // properties
    this.name = name;
    this.age = age;

    // methods
    this.setName = function(name){
        this.name = name;
    };

    this.getName = function(){
        return this.name;
    };

    this.setAge = function(age){
        this.age = age;
    };

    this.getAge = function(){
        return this.age;
    };

};

