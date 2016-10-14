var add5 = function(num){
    return num + 5;
};

while (true){
    var num = prompt('Please enter a number to add 5 to, or "quit" to exit.');
    if (num == 'quit'){
        break;
    } else {
        num = parseFloat(num);
        if (num !== NaN) alert(num + ' plus 5 is ' + add5(num));
    }
}
