var table = new Table();

// setting values
table.set('item', 'pencil');
table.set({'fruit': 'banana', 'person': 'shiela'});

// accessing objects
table.get('item'); // returns 'pencil'
table.get('item', 'fruit'); // returns {item: 'pencil', fruit: 'banana'}
table.get('event'); // returns undefined

// removal
table.set('event', 'birthday');
table.get('event'); // returns 'birthday'

table.remove('event');
table.get('event'); // returns undefined

// membership
table.hasKey('item'); // returns true
table.hasValue('banana'); // returns true
table.keyOf('pencil'); // returns 'item'

// keys and values
table.keys(); // returns ['item', 'fruit', 'person']
table.values(); // returns ['pencil', 'banana', 'shiela']
table.length(); // returns 3

// traversal
table.each(function(item, key){
    console.log(key + ': ' + item);
});

/*
    item: pencil
    fruit: banana
    person: shiela
*/
