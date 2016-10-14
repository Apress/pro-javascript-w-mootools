console.log(typeOf(Array.log)); // 'null'

Array.implement({

    log: function(){
        console.log('Hello');
    }

});

console.log(typeOf(Array.log)); // 'function'

Array.log(); // 'Hello'
