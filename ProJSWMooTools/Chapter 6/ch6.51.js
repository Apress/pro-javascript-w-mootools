Table.implement({

    set: function(key, value){
        this.$storage[key] = value;
        return this;
    }.overloadSetter(),

    get: function(key){
        return this.$storage[key];
    }.overloadGetter()

});
