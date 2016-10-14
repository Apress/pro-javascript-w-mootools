var app = function(request, response){
    response.setStatus(200);
    response.setHeaders({
        'content-type': 'text/plain',
        'content-length': 12
    });

    if (request.pathInfo == '/hello'){
        response.write('Hello World!');
    } else if (request.pathInfo == '/hi'){
        response.write('Hi Universe!');
    }

    response.finish();
};

var Deck = require('deck').Deck;

var deck = new Deck({
    app: app
});

deck.serve({port: 8000});
