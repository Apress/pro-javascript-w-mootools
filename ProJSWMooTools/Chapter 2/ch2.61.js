var decoratePair = function(fn){
    return function(key, value){
        if (typeof key == 'string'){
            var _temp = {};
            _temp[key] = value;
            key = _temp;
        }
        return fn(key);
    };
};

(function(){

    var storage = {};

    store = decoratePair(function(obj){
        for (var i in obj) storage[i] = obj[i];
    });

    retrieve = function(key){
        return storage[key];
    };

})();

console.log(retrieve('name')); // undefined

store('name', 'Mark');
console.log(retrieve('name')); // 'Mark'

