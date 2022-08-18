function max(first=-Infinity, ...rest){
    let maxValue = first;
    //残りの引数をループして、大きいものを探す。
    for(let n of rest){
        if(n > maxValue){
        maxValue = n;
        }
    }

    //最大のものを探す。
    return maxValue;
}

console.log(max(1,10,100,2,3,1000,4,5,6));