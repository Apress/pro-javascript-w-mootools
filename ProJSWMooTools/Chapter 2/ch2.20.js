var myFn = function(){
    console.log('length: ' + arguments.length);
    console.log('first: ' + arguments[0]);
};

myFn(1, 2);
// length: 2
// first: 1

myFn('a', 'b', 'c');
// length: 3
// first: a

myFn('test');
// length: 1
// first: test

