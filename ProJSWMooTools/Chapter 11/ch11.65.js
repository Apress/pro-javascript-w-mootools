var request = new Request.JSON({
    url: 'myfile.json',
    method: 'get',
    onSuccess: function(obj){
        console.log(obj.name);
    },
    onFailure: function(){
        console.log('Improper JSON response!');
    }
}).send();
