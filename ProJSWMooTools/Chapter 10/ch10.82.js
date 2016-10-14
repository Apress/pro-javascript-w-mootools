function(event){
    if (custom.condition.call(this, event)) return fn.call(this, event);
    return true;
}
