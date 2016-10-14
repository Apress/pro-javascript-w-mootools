// increment.js

var sum = require('./sum').sum;

var increment = function(num){
    return sum(num, 1);
};

exports.increment = increment;
