var myFn = function(){
    console.log('fn');
};

// class
var Person = new Class();

Person.implement({
    method: myFn
});

var shiela = new Person();

console.log(shiela.method == myFn); // false

// type
String.implement({
    method: myFn
});

var str = 'hello world';

console.log(str.method == myFn); // true
