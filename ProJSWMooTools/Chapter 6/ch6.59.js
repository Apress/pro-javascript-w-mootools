function Table(){
    if (instanceOf(this, Table)){
        this.$storage = {};
    } else {
        return new Table();
    }
};

new Type('Table', Table);

Table.implement({

    set: function(key, value){
        this.$storage[key] = value;
        return this;
    }.overloadSetter(),

    get: function(key){
        return this.$storage[key];
    }.overloadGetter(),

    remove: function(){
        var storage = this.$storage;
        Array.from(arguments).each(function(key){
            delete storage[key];
        });
    },

    hasKey: function(key){
        return this.$storage[key] !== undefined;
    },

    hasValue: function(value){
        var storage = this.$storage;
        for (var key in storage){
            if (storage[key] === value) return true;
        }
        return false;
    },

    keyOf: function(value){
        var storage = this.$storage;
        for (var key in storage){
            if (storage[key] === value) return key;
        }
        return null;
    },

    keys: function(){
        var storage = this.$storage;
        var results = [];
        for (var key in storage) results.push(key);
        return results;
    },

    values: function(){
        var storage = this.$storage;
        var results = [];
        for (var key in storage) results.push(storage[key]);
        return results;
    },

    length: function(){
        return this.keys().length;
    },

    each: function(fn, bind){
        var storage = this.$storage;
        for (var key in storage) fn.call(bind, storage[key], key, this);
        return this;
    }

});

Table.alias('forEach', 'each');
