function plus(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function calc(val1,val2,callback){
    //callback関数が実行される。
    const result = callback(val1,val2);
    console.log(result);
    //以下のように記述しても正解
    //console.log(callback(val1,val2);)
}

calc(1,2,plus);

calc(10,2,plus);

calc(10,2,minus);