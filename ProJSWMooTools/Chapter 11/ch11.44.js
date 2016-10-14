    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status >= 200 && xhr.status < 300){         
                notify.set('html', xhr.responseText);
            } else {
                notify.set('html', '<strong>Request failed, please try again.</strong>');
            }
        }
    };

	// --

var notify = $('notify');

var request = new Request({
    url: 'http://foo.com/comment/',
    data: {
        'name': 'Mark',
        'age': 23
    }
});

request.addEvents({

    'request': function(){
        notify.set('html', '<strong>Request sent, please wait.</strong>');
    }

});
