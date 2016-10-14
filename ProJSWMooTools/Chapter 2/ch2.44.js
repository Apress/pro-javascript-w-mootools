var fruit = 'banana';
var inner;

(function(){
    var fruit = 'apple';

    inner = function(){
        console.log(fruit);
    };

})();

console.log(fruit); // 'banana'
inner(); // 'apple'

