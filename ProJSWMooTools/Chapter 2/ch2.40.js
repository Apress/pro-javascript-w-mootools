var fruit = 'banana';

function outer(){
    var fruit = 'orange';

    function inner(){
        console.log(fruit); // 'orange'
    };

    inner();
};

outer();

