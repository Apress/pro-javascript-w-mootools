Request.JSON = new Class({

    Extends: Request,

    options: {
        secure: true
    },

    initialize: function(options){
        this.parent(options);
        Object.append(this.headers, {
            'Accept': 'application/json',
            'X-Request': 'JSON'
        });
    },

    success: function(text){
        var secure = this.options.secure;
        var json = this.response.json = Function.attempt(function(){
            return JSON.decode(text, secure);
        });

        if (json == null) this.onFailure();
        else this.onSuccess(json, text);
    }

});
