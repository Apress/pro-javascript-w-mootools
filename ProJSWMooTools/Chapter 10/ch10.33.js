var handler = function(event){
    event.preventDefault();
    console.log($(this).get('href'));
};

var links = $$('a');
links.each(function(link){
    link.addEventListener('click', handler, false);
});
var counter = 0;
