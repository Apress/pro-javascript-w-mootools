var handler = function(event){
    console.log(typeOf(event)); // 'event'
};

var item = $('item');
item.addEvent('click', handler);
