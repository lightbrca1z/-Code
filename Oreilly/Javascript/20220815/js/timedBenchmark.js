function timed(f){
    return function(...args){
        console.log(`Entering function ${f.name}`);
        let startTime = Date.now();
        try{
            //引数をすべてラップされた関数に返す。
            return f(...args);
        }finally{
            //戻り値を返す前に、経過時間を出力する。
            console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
        }
    };
}

function benchmark(n){
    let sum = 0;
    for(let i = 1;i <= n;i++) sum += i;
    return sum;
}

//関数をテストするために、経過時間を出力する関数を呼び出す。
console.log(timed(benchmark)(1000000));