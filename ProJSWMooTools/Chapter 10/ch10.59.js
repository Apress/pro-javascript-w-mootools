var item = $('item');

var clickHandler = function(){},
    dblclickHandler = function(){},
    focusHandler = function(){};

item.addEvents({
    'click': clickHandler,
    'dblclick': dblclickHandler,
    'focus': focusHandler
});

item.removeEvents({
    'dblclick': dblclickHandler,
    'focus': focusHandler
});
