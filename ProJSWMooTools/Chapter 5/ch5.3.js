Class.Mutators.Implements = function(items){
    Array.from(items).each(function(item){
        var instance = new item;
        for (var key in instance) implement.call(this, key, instance[key], true);
    }, this);
};
