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
