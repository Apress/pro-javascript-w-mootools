var number = 12;

var numberFactorial = (function(number){
    return (number == 0) ? 1 : number * arguments.callee(number - 1);
})(number);

console.log(numberFactorial); // 479001600

