var Thing = new Class({

    test: function(){
        var self = this;
        (function(){
            self.log();
        })();
    },

    generate: function(){
        var self = this;
        return function(){
            self.log();
        };
    },

    log: function(){
        console.log(‘Yes’);
    }.protect()

});

var obj = new Thing();
obj.test(); // ’Yes’

var fn = obj.generate();
fn(); // ”Error: The method “log” cannot be called.’
