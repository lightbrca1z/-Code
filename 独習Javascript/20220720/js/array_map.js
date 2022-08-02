const arry = [1,2,3,4,5];
function multiply5(value){
    return value * 5;
}

const newArry = arry.map(multiply5);
// const newArry = arry.map(value => value * 5);と同じ意味。
console.log(newArry);