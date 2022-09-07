var checkBMI = function(height, weight){
    var bmi = weight / (height * height);
    console.log('BMIは' + bmi + 'です。');

    if(bmi >= 25){
        console.log('これは太りすぎです。');
    }else if (bmi < 18.5){
        console.log('これは痩せすぎです。');
    }else{
        console.log('これは標準体重です。');
    }
};

checkBMI(1.76,62);
checkBMI(1.80,83.5);