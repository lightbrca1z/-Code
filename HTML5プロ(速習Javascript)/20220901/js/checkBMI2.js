var checkBMI = function(height,weight){
    var bmi = weight / (height * height);
    console.log('BMIは' + bmi + 'です。');

    if(bmi >= 25){
        console.log('これは太り過ぎです。');
        if(bmi >= 40){
            console.log('肥満度は4度です。');
        }else if(bmi >= 35){
            console.log('肥満度は3度です。');
        }else if(bmi >= 30){
            console.log('肥満度は2度です。');
        }else{
            console.log('肥満度は1度です。');
        }
    }else if(bmi >= 18.5){
        console.log('これは痩せ過ぎです。');
    }else{
        console.log('これは標準体重です。');
    }
};

checkBMI(1.60,90);
checkBMI(1.80,83.5);