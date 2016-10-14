var fruit = 'banana';

(function(){
    var fruit = 'apple';
    console.log(fruit); // 'apple'
})();

console.log(fruit); // 'banana'

