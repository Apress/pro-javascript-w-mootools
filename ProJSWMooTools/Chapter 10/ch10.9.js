var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.attachEvent('onclick', function(){
        console.log('Clicked on ' + contact.get('data-id'));
    });
});
var handler = function(){
    // get the clicked element using window.event
    var contact = $(window.event.srcElement);
    console.log('Clicked on ' + contact.get('data-id'));
};

var contacts = $('contacts').getElements('li');
contacts.each(function(contact){
    contact.attachEvent('onclick', handler);
});
