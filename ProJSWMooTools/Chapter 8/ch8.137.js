var element = $('item');

// store the data
element.set('items', [1, 2, 3]);

// retrieve the data
console.log(element.get('items')); // '[1,2,3]'
var element = $('item');

// store the data
element.store('price', 20);

// retrieve the data
console.log(element.retrieve('price')); // 20
