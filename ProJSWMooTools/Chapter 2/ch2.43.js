var fruit = 'banana';

(function(){
    var fruit = 'apple';

    function inner(){
        console.log(fruit); // 'apple'
    };

    inner();
})();

console.log(fruit); // 'banana'

