var Person = new Class({

    GetterSetter: ['name', 'age', 'occupation']

});

var mark = new Person();
mark.setName('Mark');
mark.setAge(23);
mark.setOccupation('JavaScript Developer');

console.log(mark.getName() + ', ' + mark.getAge() + ': ' + mark.getOccupation());
// 'Mark, 23: JavaScript Developer'
