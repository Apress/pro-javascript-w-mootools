// math.js

var sum = function(a, b){
    return a + b;
};

var increment = function(num){
    return sum(num, 1);
};

exports.increment = increment;
