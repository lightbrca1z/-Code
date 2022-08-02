function printSum(a,b){

    //数値型以外が引数に渡されたときには関数の処理を終了
    if(typeof a !== "number" || typeof b !== "number"){
        console.log("引数が不正なデータ型のため、関数の処理を終了します。");

        return;
    }

    console.log(a+b);
}

//文字列を渡した場合
let result = printSum("10","20");

console.log(result);

//数値を渡した場合
printSum(10,20);
