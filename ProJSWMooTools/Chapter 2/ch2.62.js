var add = function(a, b){
    return a + b;
};

var decorateMultiply = function(fn){
    return function(a, b){
        var result = fn(a, b);
        return result * b;
    };
};

var addThenMultiply = decorateMultiply(add);

console.log(add(2, 3)); // 5
console.log(addThenMultiply(2, 3)); // 15

