(function() {

    var origExtends = Class.Mutators.Extends;

    Class.Mutators.Extends = function(parent){
        origExtends.call(this, parent);

        var members = {};
        for (var key in parent){
            if (parent.hasOwnProperty(key) && !this.hasOwnProperty(key)) members[key] = parent[key];
        }
        this.extend(members);
    };

})();
