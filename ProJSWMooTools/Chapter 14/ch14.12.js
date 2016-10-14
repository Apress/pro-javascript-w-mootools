var Deck = require('deck').Deck;

var deck = new Deck({
    app: app
});

deck.serve({port: 8000});
