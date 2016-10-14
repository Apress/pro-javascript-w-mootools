var handler = function(){
    console.log(window.event.type); // 'click'
    console.log(window.event.faked); // true
};

var link = $('main');
link.attachEvent('onclick', handler);

// dispatch a click event
setTimeout(function(){
    // create a new event object
    var e = document.createEventObject();
    e.faked = true;

    // dispatch
    link.fireEvent('onclick', e);
}, 5000);
