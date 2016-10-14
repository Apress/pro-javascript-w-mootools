var data = 'name=Mark&age=23';

var request = new Request({
    url: 'http://foo.com/comment/'
});

console.log(typeOf(request.xhr)); // 'object'
