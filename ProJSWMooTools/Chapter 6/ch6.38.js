var str = 'hi';

// implement original
String.implement({

    original: function(){
        console.log('hello');
    }

});

String.alias('copy', 'original');
console.log(str.copy == str.original); // true

str.original(); // 'hello'
str.copy(); // 'hello'

// override original
String.implement({

    original: function(){
        console.log('woot!');
    }

});

console.log(str.copy == str.original); // false

str.original(); // 'woot!'
str.copy(); // 'hello'
