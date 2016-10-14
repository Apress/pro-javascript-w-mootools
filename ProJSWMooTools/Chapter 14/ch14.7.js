// the application
var app = function(env){
    return {
        status: 200,
        headers: {
            'content-type': 'text/plain',
            'content-length': 12
        },
        body: ['Hello World!']
    };
};

// http server module
var Server = require('ringo/httpserver').Server;

// create a server
var server = new Server({
    app: app,
    port: 8081
});

server.start();
