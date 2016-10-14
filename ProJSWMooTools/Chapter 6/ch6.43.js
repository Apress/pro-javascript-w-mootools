var obj = {0: 'pizza', length: 1};

console.log(obj.length); // 1

// invoke the push method of arrays
Array.prototype.push.call(obj, 'soda');

console.log(obj.length); // 2
