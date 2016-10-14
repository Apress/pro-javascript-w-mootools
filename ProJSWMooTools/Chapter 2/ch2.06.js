// outer function, global scope
var outer = function(){

    // inner function, local scope
    var localInner = function(){
        // ...
    };

    // inner function, global scope
    globalInner = function(){
        // ...
    };

};

// check the outer function
console.log(typeof outer);          // 'function'

// run outer to create the new functions
outer();

// check the new functions
console.log(typeof localInner);     // 'undefined'
console.log(typeof globalInner);    // 'function'

