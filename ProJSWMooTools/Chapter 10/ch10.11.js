var handler = function(){
    window.event.returnValue = false;
    console.log($(window.event.srcElement).get('href'));
};

var links = $$('a');
links.each(function(link){
    link.attachEvent('onclick', handler);
});
