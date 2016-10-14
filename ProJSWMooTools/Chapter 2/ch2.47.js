var fruit = 'banana';

function sayFruit(){
    console.log(this.fruit);
};

sayFruit(); // 'banana'

(function(){
    console.log(this.fruit); // ‘banana’
})();

var tellFruit = new Function('console.log(this.fruit);');

tellFruit(); // ‘banana’

