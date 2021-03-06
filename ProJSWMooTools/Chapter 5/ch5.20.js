var Person = new Class({

    // Properties
    name: '',
    age: 0,

    // Methods
    initialize: function(name, age){
        this.name = name;
        this.age = age;
    },

    log: function(){
        console.log(this.name + ‘, ‘ + this.age);
    }

});

// Static Property
Person.count = 0;

// Static Method
Person.addPerson = function(){
    this.count += 1;
};

Person.getCount = function(){
    console.log(‘Person count: ‘ + this.count);
};

// Creating a new Person instance
var mark = new Person(‘Mark‘, 23);
mark.log();

// Accessing the static method
Person.addPerson();
Person.getCount(); // ’Person count: 1’

// -- 

var Person = new Class({

    // Properties
    name: '',
    age: 0,

    // Methods
    initialize: function(name, age){
        this.name = name;
        this.age = age;
    },

    log: function(){
        console.log(this.name + ‘, ‘ + this.age);
    }

});

Person.extend({

    // Static Property
    count: 0,

    // Static Method
    addPerson: function(){
        this.count += 1;
    },

    getCount: function(){
        console.log(‘Person count: ‘ + this.count);
    }

});

// Creating a new Person instance
var mark = new Person(‘Mark‘, 23);
mark.log();

// Accessing the static method
Person.addPerson();
Person.getCount(); // ’Person count: 1’
