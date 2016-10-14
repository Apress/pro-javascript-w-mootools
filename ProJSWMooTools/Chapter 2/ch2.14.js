// Store a single-execution function's
// return value to a variable
var name = (function(name){

    return ['Hello', name].join(' ');

})('Mark');

console.log(name); // 'Hello Mark'

