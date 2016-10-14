var counter = 0;
var handler = function(event){
    if (counter < 3){
        console.log('Hello!');
    } else {
        this.removeEvent('click', handler);
    }
    counter++;
};

var item = $('item');
item.addEvent('click', handler);
