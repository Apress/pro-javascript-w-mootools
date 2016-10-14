function setName(name){
    this.name = name;
};

var object = {name: 'Mark'};

var setObjectName = setName.bind(object);

setObjectName('Joseph');
setObjectName('Olie');
setObjectName('Patrick');

