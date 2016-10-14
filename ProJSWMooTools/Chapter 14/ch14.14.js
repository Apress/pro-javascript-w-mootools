var appHello = function(request, response){
    response.setStatus(200);
    response.setHeaders({
        'content-type': 'text/plain',
        'content-length': 12
    });
    response.write('Hello World!');
    response.finish();
};

var appHi = function(request, response){
    response.setStatus(200);
    response.setHeaders({
        'content-type': 'text/plain',
        'content-length': 12
    });
    response.write('Hi Universe!');
    response.finish();
};

var Deck = require('deck').Deck;

var deck = new Deck();

deck.addRoute('/hello', appHello);
deck.addRoute('/hi', appHi);

deck.serve({port: 8000});
