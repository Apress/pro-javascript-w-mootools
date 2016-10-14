var app = function(request, response){
    response.setStatus(200);
    response.setHeaders({
        'content-type': 'text/plain',
        'content-length': 12
    });
    response.write('Hello World!');
    response.next();
};

var module = {

    preHandler: function(request, response){
        request.next();
    },

    postHandler: function(request, response){
        request.next();
    }

};

var Deck = require('deck').Deck;

var deck = new Deck({
    app: app
});

deck.addModule(module);

deck.serve({port: 8000});
