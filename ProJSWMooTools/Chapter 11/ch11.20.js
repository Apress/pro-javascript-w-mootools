var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', false);
xhr.setRequestHeader('Accept', 'text/html');
xhr.send();
xhr.abort();
