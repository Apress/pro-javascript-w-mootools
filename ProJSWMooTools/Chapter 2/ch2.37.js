var add = function(a, b){
    var localResult;
    localResult = a + b;
    globalResult = localResult;
    return localResult;
};

add(1, 2);

