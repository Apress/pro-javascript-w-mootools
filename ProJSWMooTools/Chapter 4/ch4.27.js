var Animal = new Class({

    name: '',

    initialize: function(name){
        this.name = name;
    },

    getName: function(){
        return this.name;
    }

});

console.log(Animal.prototype.getName.$owner == Animal); // true
console.log(Animal.prototype.getName.$name); // 'getName'

