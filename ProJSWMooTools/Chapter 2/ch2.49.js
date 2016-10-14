var fruit = 'banana';

(function(){
    (function(){
        console.log(this.fruit); // ‘banana’
    })();
})();

var object = {

    fruit: 'orange',

    say: function(){
        (function(){
            console.log(this.fruit); // ‘banana’
        })();
    }

};

object.say();

