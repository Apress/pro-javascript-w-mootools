var isOne = function(number){
    if (number == 1) return true;

    console.log('Not one..');
    return false;
};

var one = isOne(1);
console.log(one);
// true

var two = isOne(2);
// 'Not one..'
console.log(two);
// false

