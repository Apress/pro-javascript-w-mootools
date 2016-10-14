var fruit = 'banana';

var object = {

    fruit: 'orange',

    say: function(){
        console.log(this.fruit);
    }

};

object.say(); // ‘orange’
object.say.apply(); // ‘banana’

