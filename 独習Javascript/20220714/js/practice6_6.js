const obj1 = {num: 3};
const obj2 = {num: 3};
let num = 3;

//引数として、アドレス空間が渡されるので、関数内で、値は、書き変わる。
function fn(object1Arg, object2Arg, numberArg){
    object1Arg = {num : 5};
    object2Arg.num = 5;
    numberArg = 5;
}

fn(obj1,obj2,num);

console.log(obj1.num);
console.log(obj2.num);
console.log(num);