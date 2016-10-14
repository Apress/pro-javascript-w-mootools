var obj = {
    toElement: function(){
        return new Element('div');
    }
};

console.log(document.id(obj)); // <div></div>
