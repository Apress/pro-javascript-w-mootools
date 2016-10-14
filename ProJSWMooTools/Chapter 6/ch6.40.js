var callback = function(name, method){
    console.log(name);
};

Array.mirror(callback);

Array.implement({

    logA: function(){},

    logB: function(){}

});
