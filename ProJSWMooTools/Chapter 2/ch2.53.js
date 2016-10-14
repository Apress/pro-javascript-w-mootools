function add(a, b){
    console.log(a); // 20
    console.log(b); // 50
    console.log(a + b); // 70
};

add.call(null, 20, 50);

