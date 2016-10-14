// a function with different identifiers
var myFn = function fnID(){
    console.log(typeof fnID);
};

// the variable
console.log(typeof myFn);   // 'function'

// the identifier
console.log(typeof fnID);   // 'undefined'

myFn(); // 'function'

