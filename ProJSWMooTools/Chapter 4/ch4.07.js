// program.js
Person.implement({

    getName: function(){
        return this.name;
    },

    setName: function(name){
        this.name = name;
    },

    getAge: function(){
        return this.age;
    },

    setAge: function(age){
        this.age = age;
    }

});

