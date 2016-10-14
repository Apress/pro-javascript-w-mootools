// global variable
var x = 1;

// localized scope
(function(){

    // local x variable
    var x = 5;

    // a function object
    var myFn = new Function('console.log(x);');
    myFn(); // 1, not 5.

})();

