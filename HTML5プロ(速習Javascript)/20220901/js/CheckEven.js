var checkEven = function(num){
    var str;
    if(num % 2 === 0){
        str = '偶数';
    }else{
        str = '奇数';
    }
    console.log(num + 'は' + str + 'です。');
};

checkEven(5);