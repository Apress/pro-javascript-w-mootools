var handler = function(a, b){
    console.log(a); // 'foo'
    console.log(b); // 'bar'
};

var link = $('main');
link.addEvent('click', handler);

// dispatch a click event
setTimeout(function(){
    link.fireEvent('click', ['foo', 'bar']);
}, 5000);
