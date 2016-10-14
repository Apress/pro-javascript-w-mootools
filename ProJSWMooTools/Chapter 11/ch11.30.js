var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', true);

// attach handler
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        if (xhr.status >= 200 && xhr.status < 300){
            console.log(xhr.responseText);
        } else {
            console.log('Unsuccessful Request.');
        }
    }
};

xhr.setRequestHeader('Accept', 'text/html');
xhr.send();
