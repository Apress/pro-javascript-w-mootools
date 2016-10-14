Slick.definePseudo('input', function(node){
    var tag = node.tagName.toLowerCase();
    return (tag == 'input' || tag == 'select' || tag == 'textarea');
});
