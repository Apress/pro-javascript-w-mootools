var objArr = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
};

console.log(typeOf(objArr)); // 'object'

// turn it into a true array
objArr = Array.prototype.slice.call(objArr);

console.log(typeOf(objArr)); // 'array'
