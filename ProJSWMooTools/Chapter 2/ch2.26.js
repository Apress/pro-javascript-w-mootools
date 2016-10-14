var obj = {name: 'Mark'};

var changeNative = function(name){
    name = 'Joseph';
    console.log(name);
};

changeNative(obj.name); // 'Joseph'

console.log(obj.name);  // 'Mark'

var changeObj = function(obj){
    obj.name = 'Joseph';
    console.log(obj.name);
};

changeNative(changeObj);      // 'Joseph'

console.log(obj.name);  // 'Joseph'

