Function.implement({

    addThen: function(num){
        var self = this;
        return function(){
            var args = Array.prototype.slice.call(arguments);
            var result = self.apply(null, args);
            return result + num;
        };
    },

    combine: function(fn){
        var self = this;
        return function(){
            var args = Array.prototype.slice.call(arguments);
            var result = self.apply(null, args);
            return fn(result);
        };
    }

});

