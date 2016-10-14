function Table(){
    if (instanceOf(this, Table)){
        this.$storage = {};
    } else {
        return new Table();
    }
};
