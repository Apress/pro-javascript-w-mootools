Table.implement({

    set: function(key, value){
        this.$storage[key] = value;
        return this;
    },

    get: function(key){
        return this.$storage[key];
    }

});
