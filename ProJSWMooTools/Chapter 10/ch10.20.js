var handler = function(event){
    var contact = $(event.target);
    console.log('Clicked on ' + contact.get('data-id'));
};

var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.addEventListener('click', handler, false);
});
