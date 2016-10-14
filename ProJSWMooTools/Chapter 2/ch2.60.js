(function(){

    var storage = {};

    store = function(obj){
        for (var i in obj) storage[i] = obj[i];
    };

    retrieve = function(key){
        return storage[key];
    };

})();

console.log(retrieve('name')); // undefined

store({name: 'Mark', age: 23});
console.log(retrieve('name')); // 'Mark'

