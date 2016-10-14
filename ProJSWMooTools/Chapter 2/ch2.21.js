var add = function(){
    var result = 0,
        len = arguments.length;
    while (len--) result += arguments[len];
    console.log(result);
};

add(15); // 15
add(31, 12, 92); // 135
add(19, 53, 27, 41, 101); // 241

