var xhr = new XMLHttpRequest();

// attach handler
xhr.onreadystatechange = function(){
    console.log('Ready State Change.');
};
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/index.html', true);

// attach handler
xhr.onreadystatechange = function(){
    console.log('Ready State Change.');
};

xhr.setRequestHeader('Accept', 'text/html');
xhr.send();
