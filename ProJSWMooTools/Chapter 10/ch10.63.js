var item = $('item');

var firstEvent;

item.addEventListener('click', function(event){
    firstEvent = event;
}, false);

item.addEventListener('click', function(event){
    console.log(firstEvent === event); // true
}, false);
