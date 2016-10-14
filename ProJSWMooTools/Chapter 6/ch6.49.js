function Table(){
    if (instanceOf(this, Table)){
        this.$storage = {};
    } else {
        return new Table();
    }
};

new Type('Table', Table);

var table = new Table();

console.log(typeOf(table)); // 'table'
