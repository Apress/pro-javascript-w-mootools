var element = $('item');

var array = [1, 2, 3];

// store the data
element.store('items', array);

// retrieve the data
console.log(element.retrieve('items') === array); // true
