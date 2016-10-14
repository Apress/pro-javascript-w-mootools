// create a new function method `thenAdd`
Function.implement('thenAdd', function(num){
    var self = this;
    return function(){
        var args = Array.prototype.slice.call(arguments);
        var result = self.apply(null, args);
        return result + num;
    };
});

var add = function(a, b){
    return a + b;
};

// modify the add function to add 5 to the result
var addThenAdd5 = add.thenAdd(5);

console.log(addThenAdd5(2, 3)); // 10

var square = function(a){
    return a * a;
};

// modify the square function to add 2 to the result
var squareThenAdd2 = square.thenAdd(2);

console.log(squareThenAdd2(5)); // 27

