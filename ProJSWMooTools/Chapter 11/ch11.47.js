var request = new Request({
    method: 'get',
    url: 'http://foo.com/index.html',
    isSuccess: function(){
        return this.status == 200;
    }
});
