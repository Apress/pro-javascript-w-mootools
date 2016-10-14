Class.Mutators.Protected = function(methods){
    for (var key in methods){
        if (methods[key] instanceof Function) this.implement(key, methods[key].protect());
    }
};
