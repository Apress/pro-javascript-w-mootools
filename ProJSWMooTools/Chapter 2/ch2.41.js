var fruit = 'banana';

function outer(){
    var fruit = 'orange';

    var inner = new Function('console.log(fruit);');

    inner(); // 'banana'

};

outer();

