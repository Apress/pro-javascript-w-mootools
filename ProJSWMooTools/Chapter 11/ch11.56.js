var notify = $('notify');

var request = new Request({

    url: 'http://foo.com/comment/',

    data: {
        'name': 'Mark',
        'age': 23
    },

    timeout: 5000,

    onRequest: function(){
        notify.set('html', '<strong>Request sent, please wait.</strong>');
    },

    onSuccess: function(){
        notify.set('html', this.response.text);
    },

    onFailure: function(){
        notify.set('html', '<strong>Request failed, please try again.</strong>');
    },

    onTimeout: function(){
        notify.set('html', '<strong>Request timeout, please try again.</strong>');
    }

});
