var count = 0;

var id = setInterval(function(){
    console.log('Hello');
    count++;
    if (count === 3) clearInterval(id);
}, 1000);
