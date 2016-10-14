var fruit = 'banana';
var animal = 'cat';

function sayFruit(){
    var fruit = 'apple';

    console.log(fruit); // 'apple'
    console.log(animal); // 'cat'
};

console.log(fruit); // 'banana'
console.log(animal); // 'cat'

sayFruit();

