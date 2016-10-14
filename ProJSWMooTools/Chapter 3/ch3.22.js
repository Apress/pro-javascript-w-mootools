// Animal constructor
var Animal = function(name){
    this.name = name;
};

// Animal prototype
Animal.prototype.walk = function(){
    console.log(this.name + ' is walking.');
};

// Animal instance
var cat = new Animal('Cat');
cat.walk(); // 'Cat is walking.'

