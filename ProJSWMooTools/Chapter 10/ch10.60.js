var handler = function(){
    console.log('Clicked');
};

var link = $('main');
link.addEvent('click', handler);

// dispatch a click event
setTimeout(function(){
    link.fireEvent('click');
}, 5000);
