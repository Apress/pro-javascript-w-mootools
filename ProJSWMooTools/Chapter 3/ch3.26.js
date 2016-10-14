var Animal = function(name){
    this.name = name;
};

Animal.prototype.name = 'Animal';

Animal.prototype.getName = function(){
    return this.name;
};

// Call `getName` directly from the prototype
Animal.prototype.getName(); // returns 'Animal'

var cat = new Animal('Cat');
cat.getName(); // returns 'Cat'

