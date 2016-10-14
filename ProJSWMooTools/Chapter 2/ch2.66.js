function setName(name){
    this.name = name;
};

var object = {name: 'Mark'};

function setObjectName(name){
    setName.call(object, name);
};

setObjectName('Joseph');
setObjectName('Olie');
setObjectName('Patrick');

