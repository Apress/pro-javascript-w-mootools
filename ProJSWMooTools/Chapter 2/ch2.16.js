var number = 12;

var numberFactorial = (function factorial(number){
    return (number == 0) ? 1 : number * factorial(number - 1);
})(number);

console.log(numberFactorial); // 479001600

