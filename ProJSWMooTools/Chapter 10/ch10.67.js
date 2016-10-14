var item = $('item');

console.log(typeOf(item.retrieve('events'))); // 'null'

var handler = function(){};
item.addEvent('click', handler);

console.log(typeOf(item.retrieve('events'))); // 'object'
