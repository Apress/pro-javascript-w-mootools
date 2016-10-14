/example
    /libs
        increment.js
        sum.js
    program.js

	// --

(function(){

var $top = this,
    $exports = (typeof exports === 'object') ? exports : {};

Array.each([
    "MooTools",
    "typeOf", "instanceOf",
    "Type", "Class",
    "Events", "Options", "Chain"
], function(item){ $exports[item] = $top[item]; });

$exports.into = function into(globalObj){
    if (globalObj && globalObj !== $top){
        for (var i in $exports) {
            if ($exports[i] !== into) globalObj[i] = $exports[i];
        }
    }
    return globalObj;
};

})();
