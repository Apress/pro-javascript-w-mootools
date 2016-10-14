var app = function(request, response){
    response.writeHead(200, {
        'content-type': 'text/plain',
        'content-length': 12
    });
    response.write('Hello World!');
    response.end();
};
