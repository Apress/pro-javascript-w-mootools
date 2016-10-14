var myFn = function(first, second){
    console.log('first: ' + first);
    console.log('second: ' + second);
};

myFn(1, 2);
// first: 1
// second: 2

myFn('a', 'b', 'c');
// first: a
// second: b

myFn('test');
// first: test
// second: undefined

