Table.implement({

    keyOf: function(value){
        var storage = this.$storage;
        for (var key in storage){
            if (storage[key] === value) return key;
        }
        return null;
    }

});
