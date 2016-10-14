var appendArg = function(){
    arguments[2] = 'three';
    console.log(arguments.length);
};

appendArg('one', 'two'); // 2

