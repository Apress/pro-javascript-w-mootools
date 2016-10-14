Element.Properties.style = {

    set: function(style){
        this.style.cssText = style;
    },

    get: function(){
        return this.style.cssText;
    },

    erase: function(){
        this.style.cssText = '';
    }

};
