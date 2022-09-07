var checkEven = function(num){
    var str = num % 2 === 0 ? '偶数' : '奇数';
    console.log(num + 'は' + str + 'です。');
};

checkEven(5);