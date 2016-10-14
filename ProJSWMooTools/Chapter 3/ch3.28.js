var Animal = function(){};

Animal.prototype.data = {name: 'animal', type: 'unknown'};

Animal.prototype.setData = function(name, type){
    this.data.name = name;
    this.data.type = type;
};

Animal.prototype.getData = function(){
    console.log(this.data.name + ': ' + this.data.type);
};

var cat = new Animal();
cat.setData('Cat', 'Mammal');
cat.getData(); // 'Cat: Mammal'

var shark = new Animal();
shark.setData('Shark', 'Fish');
shark.getData(); // 'Shark: Fish'

cat.getData(); // 'Shark: Fish'

