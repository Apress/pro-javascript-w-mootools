var module = {

    preHandler: function(request, response){
        request.next();
    },

    postHandler: function(request, response){
        request.next();
    }

};
