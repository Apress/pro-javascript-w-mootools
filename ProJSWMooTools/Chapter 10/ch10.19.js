var handler = function(event){
    console.log(event.type); // 'click'
};

var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.addEventListener('click', handler, false);
});
