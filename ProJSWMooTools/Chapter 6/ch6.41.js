var fn = function(){};

console.log(fn.prop); // undefined
console.log(fn.item); // undefined

fn.extend({

    prop: 'property',

    item: 'item'

});

console.log(fn.prop); // 'property'
console.log(fn.item); // 'item'
