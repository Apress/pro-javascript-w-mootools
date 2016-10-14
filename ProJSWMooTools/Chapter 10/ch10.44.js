var item = $('item');
item.addEvents({

    'click': function(event){
        console.log('Clicked');
    },

    'dblclick': function(event){
        console.log('Double-Clicked');
    },

    'focus': function(event){
        console.log('Focused');
    }

});
