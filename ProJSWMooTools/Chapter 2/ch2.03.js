// outer function, global scope
function outer(){

    // inner function, local scope
    function inner(){
        // ...
    };

};

// check the outer function
console.log(typeof outer);  // 'function'

// run outer to create the new functions
outer();

// check the inner function
console.log(typeof inner);  // 'undefined'

