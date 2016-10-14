var find = function(node, name){
    if (node.name == name){
        return node;
    } else if (node.children && node.children.length){
        for (var i = 0, y = node.children.length; i < y; i++){
            var found = find(node.children[i], name);
            if (found) return found;
        }
    }
    return null;
};

var C1 = find(tree.root, 'C1');
console.log(C1.name === 'C1'); // true

var D = find(C1, 'D');
console.log(D.name === 'D'); // true
