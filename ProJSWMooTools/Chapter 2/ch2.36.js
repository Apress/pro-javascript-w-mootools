var add = function(a, b){
    var localResult = a + b;
    globalResult = localResult;
    return localResult;
};

add(1, 2);

