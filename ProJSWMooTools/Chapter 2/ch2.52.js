function add(a, b){
    console.log(a); // 20
    console.log(b); // 50
    console.log(a + b); // 70
};

add.apply(null, [20, 50]);

