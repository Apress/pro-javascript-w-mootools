var handlerA = function(){
    console.log('Handler A.');
};

var handlerB = function(){
    console.log('Handler B.');
};

var item = $('item');
item.attachEvent('onclick', handlerA);
item.attachEvent('onclick', handlerB);
