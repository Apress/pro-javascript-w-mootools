var objArr = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
};

console.log(objArr.length); // 3

// the first member of the array
console.log(objArr[0]); // 1

// add a member to the front
Array.prototype.unshift.call(objArr, 0);

console.log(objArr[0]); // 0
console.log(objArr.length); // 4

// add a member to the back
Array.prototype.push.call(objArr, 4);

console.log(objArr[4]); // 4
console.log(objArr.length); // 5

// check that it's still an object
console.log(typeOf(objArr)); // 'object'
