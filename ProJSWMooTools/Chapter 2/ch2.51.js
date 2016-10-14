function add(){
    console.log(this.a + this.b);
};

var a = 12;
var b = 13;

add(); // 25

var values = {a: 50, b: 23};

add.apply(values); // 73

