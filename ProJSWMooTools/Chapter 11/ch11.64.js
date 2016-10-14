var request = new Request({
    url: 'myfile.json',
    method: 'get',
    headers: {
        'Accept': 'application/json'
    },
    onSuccess: function(text){
        var obj = JSON.decode(text);
        if (obj){
            console.log(obj.name);
        } else {
            console.log('Improper JSON response!');
        }
    }
}).send();
