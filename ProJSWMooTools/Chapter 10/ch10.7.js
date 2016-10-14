var handler = function(){
    console.log('Clicked.');
};

var item = $('item');
item.attachEvent('onclick', handler);
item.attachEvent('onclick', handler);
item.attachEvent('onclick', handler);
