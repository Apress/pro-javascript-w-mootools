var add = function add(a, b){
    return a + b;
};

console.log(typeof add);    // 'function'
console.log(add.name);      // 'add'
console.log(add.length);    // 2

console.log(add(20, 5));    // 25

