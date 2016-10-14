var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', false);
xhr.setRequestHeader('Accept', 'text/html');
xhr.send();

console.log(xhr.getResponseHeader('Content-Type')); // 'text/html'
console.log(xhr.getResponseHeader('Content-Length')); // '87'

console.log(xhr.getResponseHeader('Fake-Header')); // null
