var handler = function(){
    console.log('Clicked.');
};

var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.attachEvent('onclick', handler);
});
