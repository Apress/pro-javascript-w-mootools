var Postable = function(element){
    this.element = element;
    this.element.method = 'POST';
};

var SubPostable = function(){};

SubPostable.prototype = new Postable(); // this will throw an error

