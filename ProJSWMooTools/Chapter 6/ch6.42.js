Array.extend({

    identity: function(){
        console.log(this === Array);
    },

    log: function(){
        console.log('Hello');
    }

});

Array.identity(); // true
Array.log(); // 'Hello'
