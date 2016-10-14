var Postable = new Class({

    element: null,

    initialize: function(element){
        this.element = element;
        this.element.method = 'POST';
    }

});

var SubPostable = new Class({

    Extends: Postable

});

