Class.Mutators.Extends = function(parent){
    this.parent = parent;
    this.prototype = getInstance(parent);
};
