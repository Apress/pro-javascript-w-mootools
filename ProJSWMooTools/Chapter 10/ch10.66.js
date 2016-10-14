var item = $('item');

item.addEvent('click', function(event){
    console.log(window.event == event.event); // true
});
Event.implement('preventDefault', function(){
    if (this.event.preventDefault) this.event.preventDefault();
    else this.event.returnValue = false;
    return this;
});
Event.implement('stopPropagation', function(){
    if (this.event.stopPropagation) this.event.stopPropagation();
    else this.event.cancelBubble = true;
    return this;
});
