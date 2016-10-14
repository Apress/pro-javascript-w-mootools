// top level scope
var a = 1;

// localize scope with a single
// execution function
(function(){

    // local scope
    var a = 2;

})();

console.log(a); // 1

