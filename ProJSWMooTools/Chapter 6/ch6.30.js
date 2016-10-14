// Type Object
new Type('Array', Array);

// make sure that Array is a type object
console.log(typeOf(Array)); // 'type'

// is Array a native instance of Type?
console.log(Array instanceof Type); // false

// is Array an instance of Type in MooTools?
console.log( instanceOf(Array, Type) ); // true


// Class
var Personn = new Class();

// make sure that Person is a class
console.log(typeOf(Person)); // 'class'

// is Person a native instance of Class?
console.log(Person instanceof Class); // false

// is Person an instance of Class in MooTools?
console.log( instanceOf(Person, Class) ); // true
