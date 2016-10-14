Table.implement({

    hasKey: function(key){
        return this.$storage[key] !== undefined;
    }

});
