Element.Properties.display = {

    set: function(type){
        return this.style['display'] = type || 'block';
    },

    get: function(){
        return this.getComputedStyle('display');
    },

    erase: function(){
        return this.style['display'] = 'none';
    }

};
