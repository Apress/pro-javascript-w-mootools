var spinner = new Element('img', {src: 'spinner.gif'});

var request = new Request({
    method: 'get',
    url: 'http://foo.com/index.html'
});

request.addEvents({

    'request': function(){
        spinner.inject(document.body, 'top');
    },

    'complete': function(){
        spinner.destroy();
    }

});
