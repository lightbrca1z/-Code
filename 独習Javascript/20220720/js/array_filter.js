const arry = [1,2,3,4,5];
function gt3(value){
    return value > 3;
}

const newArry = arry.filter(gt3);
console.log(newArry);