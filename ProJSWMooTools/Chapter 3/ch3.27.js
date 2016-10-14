// Create an object
var object = {name: 'Mark'};

// "Copy" the object into another variable
var copy = object;

console.log(object.name); // 'Mark'
console.log(copy.name); // 'Mark'

// Change the value of our copy
copy.name = 'Joseph';

console.log(copy.name); // 'Joseph'
console.log(object.name); // 'Joseph'

