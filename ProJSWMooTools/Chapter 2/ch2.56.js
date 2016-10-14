// create a single execution function
// to encapsulate the code and localize the user variable
(function(){

    // our variable is now local
    var user = {name: 'Mark', age: 23};

    // make our functions global
    setName = function(name){
        if (typeof name == 'string') user.name = name;
    };

    getName = function(){
        return user.name;
    };

    setAge = function(age){
        if (typeof age == 'number') user.age = age;
    };

    getAge = function(){
        return user.age;
    };

})();

// set a new name
setName('Joseph');
console.log(getName()); // 'Joseph'

// set a new age
setAge(22);
console.log(getAge()); // 22

