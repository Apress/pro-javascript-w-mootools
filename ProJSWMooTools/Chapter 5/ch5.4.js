var Person = new Class({

    $name: '',
    $age: 0,
    $occupation: '',

    setName: function(name){
        this.$name = name;
        return this;
    },

    getName: function(){
        return this.$name;
    },

    setAge: function(age){
        this.$age = age;
        return this;
    },

    getAge: function(){
        return this.$age;
    },

    setOccupation: function(occupation){
        this.$occupation = occupation;
        return this;
    },

    getOccupation: function(){
        return this.$occupation;
    }

});

var mark = new Person();
mark.setName('Mark');
mark.setAge(23);
mark.setOccupation('JavaScript Developer');

console.log(mark.getName() + ', ' + mark.getAge() + ': ' + mark.getOccupation());
// 'Mark, 23: JavaScript Developer'
