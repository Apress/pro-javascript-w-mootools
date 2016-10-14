var a = 1;

var add = function(a, b){
    return a + b;
};

var callAdd = function(a, b){
    return add(a, b);
};

add(a, 2);

callAdd(1, 2);

