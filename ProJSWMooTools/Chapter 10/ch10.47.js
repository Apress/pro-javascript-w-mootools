var handler = function(){
    console.log('Clicked.');
};

var item = $('item');
item.addEvent('click', handler);
item.addEvent('click', handler);
item.addEvent('click', handler);
