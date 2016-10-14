// program.js
var mark = new Person('Mark', 23);
mark.log(); // 'Mark, 23'

mark.getName = function(){ return this.name; };
mark.getAge = function(){ return this.age; };

mark.getName(); // returns 'Mark'
mark.getAge(); // returns 23

var joseph = new Person('Joseph', 22);
joseph.log(); // 'Joseph, 22'

// the following lines will produce an error:
joseph.getName();
joseph.getAge();

