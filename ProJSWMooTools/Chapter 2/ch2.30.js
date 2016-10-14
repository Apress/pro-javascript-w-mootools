// this is global code
var name = 'John';
var age = 20;

function add(a, b){
    // this is function code
    var result = a + b;
    return result;
};

(function(){
    // this is function code
    var day = 'Tuesday';

    var time = function(){
        // this is also function code,
        // but it is separate from the code
        // above
        return day;
    };
})();

// this is eval code
eval('alert("yay!");');

