window.addEvent('domready', function(){
    var notify = $('notify'),
        data = 'name=Mark&age=23';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://foo.com/comment/', true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status >= 200 && xhr.status < 300){         
                notify.set('html', xhr.responseText);
            } else {
                notify.set('html', '<strong>Request failed, please try again.</strong>');
            }
        }
    };

    xhr.setRequestHeader('Accept', 'text/html');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Content-Length', data.length);

    xhr.send(data);
    notify.set('html', '<strong>Request sent, please wait.</strong>');

    // timeout
    setTimeout(function(){
        xhr.abort();
        notify.set('html', '<strong>Request timeout, please try again.</strong>');
    }, 5000);
});
