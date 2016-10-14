 
var str = 'howdy';

// implement the original
String.implement({

    repeat: function(times){
        var arr = [];
        while (times--) arr.push(this);
        return arr.join('');
    }

});

console.log(str.repeat(2)); // 'howdyhowdy'

// alias repeat
String.alias('again', 'repeat');
console.log(str.again == str.repeat); // true

console.log(str.again(2)); // 'howdyhowdy'
