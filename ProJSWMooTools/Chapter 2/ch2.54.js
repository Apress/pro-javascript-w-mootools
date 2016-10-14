// the `user` object where we keep the data
var user = {name: 'Mark', age: 23};

function setName(name){
    // make sure the name is a string
    if (typeof name == 'string') user.name = name;
};

function getName(){
    return user.name;
};

function setAge(age){
    // make sure the age is a number
    if (typeof age == 'number') user.age = age;
};

function getAge(){
    return user.age;
};

// set a new name
setName('Joseph');
console.log(getName()); // 'Joseph'

// set a new age
setAge(22);
console.log(getAge()); // 22

