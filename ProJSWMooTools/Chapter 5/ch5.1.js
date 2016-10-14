var Duck = new Class({

    Extends: Bird,

    Implements: [Events, Options],

    options: {
        name: '',
        color: ''
    },

    initialize: function(name){
        this.setOptions(name);
 }

});
