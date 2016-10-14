var Person = new Class({

    initialize: function(name, age){
        this.name = name;
        this.age = age;
    },

    log: function(){
        return this.name + ', ' + this.age;
    }

});

var cassiopeia = new Person('Cassiopeia', '21');

print(cassiopeia.log);
