var handler = function(event){
    console.log(event.foo); // 'bar'
};

var link = $('main');
link.addEvent('click', handler);

// dispatch a click event
setTimeout(function(){
    link.fireEvent('click', {foo: 'bar'});
}, 5000);
