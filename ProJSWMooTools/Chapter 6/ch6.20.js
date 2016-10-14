// boolean
console.log(Boolean(0));        // false
console.log(Boolean(''));       // false
console.log(Boolean('24'));     // true
console.log(Boolean({}));       // true

// number
console.log(Number(false));     // 0
console.log(Number(''));        // 0
console.log(Number('24'));      // 24
console.log(Number({}));        // NaN

// string
console.log(String(false));     // 'false'
console.log(String(24));        // '24'
console.log(String({}));        // '[object Object]'
console.log(String([1, 2, 3])); // '1,2,3'
