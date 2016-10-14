var add = function(a, b){
    return a + b;
};

var square = function(a){
    return a * a;
};

var combine = function(fnA, fnB){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        var result = fnA.apply(null, args);
        return fnB.call(null, results);
    };
};

var addThenSquare = combine(add, square);

var result = addThenSquare(3, 5);
console.log(result); // 64

