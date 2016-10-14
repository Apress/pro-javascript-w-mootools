var handlerA = function(){
    console.log('Handler A.');
};

var handlerB = function(){
    console.log('Handler B.');
};

var item = $('item');
item.addEvent('click', handlerA);
item.addEvent('click', handlerB);
