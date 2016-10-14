var link = $$('a');
link.addEvent('click', function(event){
    event.preventDefault();
    event.stopPropagation();
});
