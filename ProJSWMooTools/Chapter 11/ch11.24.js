var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', true);
xhr.setRequestHeader('Accept', 'text/html');
xhr.send();

console.log(xhr.responseText); // undefined
