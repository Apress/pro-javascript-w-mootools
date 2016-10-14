var data = 'name=Mark&age=23';

var request = new Request({
    url: 'http://foo.com/comment/'
});

request.setHeader('Accept', 'text/html');
request.setHeader('Content-Type', 'application/x-www-form-urlencoded');
request.setHeader('Content-Length', data.length);
