var rewriteArgs = function(){
    arguments[0] = 'no';
    console.log(arguments[0]);
};

rewriteArgs('yes'); // 'no'

var replaceArgs = function(){
    arguments = null;
    console.log(arguments == null);
};

replaceArgs(); // true

