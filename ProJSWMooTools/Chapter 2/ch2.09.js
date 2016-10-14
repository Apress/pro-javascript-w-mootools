// global scope
var createFn = function(){

    // result function
    return function(){
        console.log(typeof myFn);
    };

};

// different scope
(function(){

    // put the result function of `createFn`
    // into a local variable
    var myFn = createFn();

    // check if reference is available
    myFn(); // 'undefined'

})();

