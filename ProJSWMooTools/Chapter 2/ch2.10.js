// global scope
var createFn = function(){

    // result function, with identifier
    return function myFn(){
        console.log(typeof myFn);
    };

};

// a different scope
(function(){

    // put the result function of `createFn`
    // into a local variable
    var myFn = createFn();

    // check if reference is available
    myFn(); // 'function'

})();

