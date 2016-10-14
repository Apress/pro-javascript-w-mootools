var data = 'name=Mark&age=23';

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://foo.com/data/', false);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Content-Length', data.length);
xhr.send(data);
