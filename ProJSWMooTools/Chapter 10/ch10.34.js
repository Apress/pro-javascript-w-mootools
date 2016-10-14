var handler = function(event){
    if (counter < 3){
        console.log('Hello!');
    } else {
        event.target.removeEventListener('click', handler, false);
    }
    counter++;
};

var item = $('item');
item.addEventListener('click', handler, false);
