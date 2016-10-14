Table.implement({

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
    }

});
