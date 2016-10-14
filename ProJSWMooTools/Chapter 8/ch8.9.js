...

// Say hello
var greeter = $('greeter');
greeter.addEvent('click', function(event){
    event.preventDefault();
    alert('Hey There Mister!');
});

...
