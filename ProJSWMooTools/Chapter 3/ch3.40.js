var Animal = Object.create({});
Animal.name = 'animal';

var Cat = Object.create(Animal);
Cat.name = 'cat';

myCat = Object.create(Cat);

