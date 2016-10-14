var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html');
xhr.setRequestHeader('Accept', 'text/html');

// timeout
setTimeout(function(){
    xhr.abort();
}, 5000);

xhr.send();
