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

// zest module
var Zest = require('zest').Zest;

// create a server
var server = new Zest({
    handler: app,
    port: 8081
});

server.start();
