var person = {
    name: 'Mark',
    age: 23,

    sayName: function(){
        console.log(this.name); // 'Mark'
    }
};

console.log(typeof person.sayName); // 'function'
person.sayName();

person.sayAge = function(){
    console.log(this.age); // 23
};

console.log(typeof person.sayAge); // 'function'
person.sayAge();

