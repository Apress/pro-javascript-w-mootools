var arr = [], str = 'hello';
console.log(arr.log); // undefined
console.log(str.log); // undefined

// make String "mirror" Array
Array.mirror(String);

// implement log on array
Array.implement({

    log: function(){
        console.log('log called.');
    }

});

console.log(arr.log == str.log); // true

arr.log(); // method called.
str.log(); // method called.
