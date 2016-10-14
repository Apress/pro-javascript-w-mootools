var handler = function(){
    console.log('Clicked.');
};

var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.addEventListener('click', handler, false);
});
var handler = function(){
    console.log('Clicked.');
};

var item = $('item');
item.addEventListener('click', handler, false);
item.addEventListener('click', handler, false);
item.addEventListener('click', handler, false);
