Table.implement({

    remove: function(){
        var storage = this.$storage;
        Array.from(arguments).each(function(key){
            delete storage[key];
        });
    }

});
