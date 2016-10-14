var trickling = function(event){
    console.log('Trickling');
};

var bubbling = function(event){
    console.log('Bubbling');
    event.target.removeEventListener('click', trickling, true);
};

var item = $('item');
item.addEventListener('click', trickling, true);
item.addEventListener('click', bubbling, false);
