var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', true);

// attach handler
xhr.onreadystatechange = function(){
    switch(xhr.readyState){
        case 1: console.log('1: Connect'); break;
        case 2: console.log('2: Send'); break;
        case 3: console.log('3: Download'); break;
        case 4: console.log('4: Complete'); break;
    }
};

xhr.setRequestHeader('Accept', 'text/html');
xhr.send();
