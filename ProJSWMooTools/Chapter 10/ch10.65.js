var item = $('item');

var nativeEvent;

item.addEventListener('click', function(event){
    nativeEvent = event;
}, false);

item.addEvent('click', function(event){
    console.log(nativeEvent == event.event); // true
});
