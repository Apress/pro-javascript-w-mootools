var Animal = function(){};
Animal.prototype = new Object();
Animal.prototype.name = 'animal';

var Cat = function(){};
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var myCat = new Cat();

