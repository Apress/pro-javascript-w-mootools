// a variable in the current scope
var items = 1;

// a function declaration with the
// same name; overrides value
function items(){
    // ...
};

console.log(typeof items); // 'function', not 'number'

