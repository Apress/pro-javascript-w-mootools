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
    },

    'success': function(){
        notify.set('html', this.response.text);
    },

    'failure': function(){
        notify.set('html', '<strong>Request failed, please try again.</strong>');
    }

});
