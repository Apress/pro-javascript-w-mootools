var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', false);
xhr.setRequestHeader('Accept', 'text/html');
xhr.send();

if (xhr.status >= 200 && xhr.status < 300){
    console.log(xhr.responseText);
} else {
    console.log('Unsuccessful Request.');
}
