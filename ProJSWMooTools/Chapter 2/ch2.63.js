var add = function(a, b){
    return a + b;
};

var square = function(a){
    return a * a;
};

var result = square(add(3, 5));
console.log(result); // 64

