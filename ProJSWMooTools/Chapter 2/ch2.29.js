var getData = function(id){
    if (!id) return null;
    var element = $(id);
    if (!element) return null;
    return element.get('data-name');
};

console.log(getData());                     // null
console.log(getData('non existent id'));    // null
console.log(getData('main'));               // 'Tim'

