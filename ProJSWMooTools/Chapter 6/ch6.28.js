new Type('Array', Array);

// make sure that Array is a type object
console.log(typeOf(Array)); // 'type'

// is Array an instance of Type?
console.log(Array instanceof Type); // false
