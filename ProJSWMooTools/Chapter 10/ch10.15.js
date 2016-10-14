var counter = 0;
var handler = function(){
    if (counter < 3){
        console.log('Hello!');
    } else {
        window.event.srcElement.detachEvent('onclick', handler);
    }
    counter++;
};

var item = $('item');
item.attachEvent('onclick', handler);
