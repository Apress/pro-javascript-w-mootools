var fn1 = function(){
    setTimeout(function fn2(){
        console.log('fn2');
    }, 0);
    console.log('fn1');
};

fn1();
