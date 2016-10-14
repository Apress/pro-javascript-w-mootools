Table.implement({

    each: function(fn, bind){
        var storage = this.$storage;
        for (var key in storage) fn.call(bind, storage[key], key, this);
        return this;
    }

});

Table.alias('forEach', 'each');
