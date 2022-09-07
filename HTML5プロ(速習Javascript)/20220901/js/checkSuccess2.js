//どちらかが80点。
var checkSuccess = function(math, english){
    if (math >= 80 || english >= 80){
        console.log('合格です。');
    }else {
        console.log('不合格です。');
    }
};

checkSuccess(60,90);
checkSuccess(100,70);
checkSuccess(90,90);