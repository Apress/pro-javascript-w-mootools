// decorator
var decorate = function(app){
    return function(env){
        var response = app(env);
        response.body.push('/nHi Universe!');
        response.headers['content-length'] = response.body.join('').length;
        return response;
    };
};

// jsgi application
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

// decorate app
app = decorate(app);
