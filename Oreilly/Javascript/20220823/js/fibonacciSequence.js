function* fibonacciSequence(){
    let x = 0, y = 1;
    for(;;){
        yield y;
        [x, y] = [y, x+y];
    }
}

function fibonacci(n){
    for(let f of fibonacciSequence()){
        if(n-- <= 0) return f;
    }
}
console.log(fibonacci(20));