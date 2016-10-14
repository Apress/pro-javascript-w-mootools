// the element
var square = $('square');

// time/frames variables
var duration = 1000;
var rate = 50;
var frames = duration / 1000 * rate;

// property variables
var initial = parseFloat(square.style.left);
var amount = 20;
var increment = amount / frames;

var step = function(){
    // get the current value
    var left = parseFloat(square.style.left);

    if (left < (initial + amount)){
        // increment the value
        left += increment;

        // set the new value
        square.style.left = left + 'px';
    } else {
        // stop the timer
        clearInterval(stepInterval);
    }
};

var stepInterval = setInterval(step, Math.round(duration / frames));
