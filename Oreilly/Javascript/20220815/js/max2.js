function max(x){
    let maxValue = -Infinity;
    //すべての引数を調べて最大値を見つけて、記憶する。
    for(let i = 0;i < arguments.length; i++){
        if(arguments[i] > maxValue) maxValue = arguments[i];
    }

    //最大値を返す。
    return maxValue;
}

console.log(max(1,10,100,2,3,1000,4,5,6));