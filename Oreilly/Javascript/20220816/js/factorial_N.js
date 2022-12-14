function factorial(n){
    if(Number.isInteger(n) && n > 0){
        if(!(n in factorial)){
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
    }else{
        return NaN;
    }
}

console.log(factorial[1] = 1);
console.log(factorial(6));
console.log(factorial[5]); 