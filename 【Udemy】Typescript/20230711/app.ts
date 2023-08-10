function add(n1:number,n2:number,showResult:boolean,phrase:String){
    
const result = n1 + n2;
    
if(showResult){
    console.log(phrase + String(result));
}else{
    return result;
}
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result : ';

const result = add(number1,number2,printResult,resultPhrase);
console.log(result);