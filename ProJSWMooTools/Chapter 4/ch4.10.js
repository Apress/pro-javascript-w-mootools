var myFn = function(){
    console.log('Hello');
};

var Person = new Class({
    log: myFn
});

var mark = new Person();

console.log(typeof mark.log); // 'function'
console.log(mark.log == myFn); // false

console.log(mark.log.$origin == myFn); // true

mark.log(); // 'Hello'

