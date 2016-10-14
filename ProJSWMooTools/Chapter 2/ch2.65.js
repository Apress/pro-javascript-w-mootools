function setName(name){
    this.name = name;
};

var object = {name: 'Mark'};

setName.call(object, 'Joseph');
setName.call(object, 'Olie');
setName.call(object, 'Patrick');

