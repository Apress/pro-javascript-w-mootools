var argsToArray = function(){
    console.log(typeof arguments.callee); // ‘function’
    var args = Array.prototype.slice.call(arguments);
    console.log(typeof args.callee); // ‘undefined’
    console.log(typeof args.splice); // ‘function’
};

argsToArray();

