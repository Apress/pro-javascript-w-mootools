var myFn = function(){
    console.log('Hello');
};

var Person = function(){};
Person.prototype.log = myFn;

var mark = new Person();

console.log(typeof mark.log); // 'function'
console.log(mark.log == myFn); // true

mark.log(); // 'Hello'

