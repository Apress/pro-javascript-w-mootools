var item = $('item');

var handler = function(event){
    console.log(this === item); // true
};

item.addEvent('click', handler);
