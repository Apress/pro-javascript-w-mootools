var item = $('item');
item.addEvent('click', function(event){
    if (event.shift) console.log('shift click!');
});
