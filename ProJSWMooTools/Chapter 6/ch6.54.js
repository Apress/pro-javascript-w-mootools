Table.implement({

    hasValue: function(value){
        var storage = this.$storage;
        for (var key in storage){
            if (storage[key] === value) return true;
        }
        return false;
    }

});
