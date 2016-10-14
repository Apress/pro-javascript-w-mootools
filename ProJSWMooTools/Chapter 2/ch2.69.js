Function.implement('combine', function(fn){
    var self = this;
    return function(){
        var args = Array.prototype.slice.call(arguments);
        var result = self.apply(null, args);
        return fn(result);
    };
});

var add = function(a, b){
    return a + b;
};

var square = function(a){
    return a * a;
};

var addThenSquare = add.combine(square);

var result = addThenSquare(3, 5);
console.log(result); // 64

