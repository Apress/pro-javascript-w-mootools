var str = 'hello';

console.log(typeOf(str.repeat)); // 'null'

String.prototype.repeat = function(times){
        var arr = [];
        while (times--) arr.push(this);
        return arr.join('');
};

console.log(typeOf(str.repeat)); // 'function'
console.log(str.repeat(3)); // 'hellohellohello'
