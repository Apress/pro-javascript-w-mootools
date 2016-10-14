// real array
var arr = [1, 2, 3];

for (var i = 0, l = arr.length; i < l; i++){
    console.log(arr[i]);
}

/* output:
    1
    2
    3
*/

// "object" array
var objArr = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
};

for (var i = 0, l = objArr.length; i < l; i++){
    console.log(objArr[i]);
}

/* output:
    1
    2
    3
*/
