var app = function(request, response){
    response.writeHead(200, {
        'content-type': 'text/plain',
        'content-length': 12
    });
    response.write('Hello World!');
    response.end();
};

var http = require('http');

var server = http.createServer(app);
server.listen(8081);
