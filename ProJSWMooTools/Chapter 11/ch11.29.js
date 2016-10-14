var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', true);

// attach handler
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        console.log(xhr.responseText);
    }
};

xhr.setRequestHeader('Accept', 'text/html');
xhr.send();
