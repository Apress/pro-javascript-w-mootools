var notify = $('notify');

var request = new Request({
    url: 'http://foo.com/comment/',
    data: {
        'name': 'Mark',
        'age': 23
    },
    timeout: 5000
});

request.addEvents({

    'request': function(){
        notify.set('html', '<strong>Request sent, please wait.</strong>');
    },

    'success': function(){
        notify.set('html', this.response.text);
    },

    'failure': function(){
        notify.set('html', '<strong>Request failed, please try again.</strong>');
    },

    'timeout': function(){
        notify.set('html', '<strong>Request timeout, please try again.</strong>');
    }

});
