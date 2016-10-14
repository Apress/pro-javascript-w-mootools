function add(a, b){
    return a + b;
};

function curryAdd(a){
    return function(b){
        return add(a, b);
    };
};

var add5 = curryAdd(5);

add5(2);
add5(5);
add5(200);

