var handlerA = function(){
    console.log('Handler A.');
};

var handlerB = function(){
    console.log('Handler B.');
};

var item = $('item');
item.addEventListener('click', handlerA, false);
item.addEventListener('click', handlerB, false);
