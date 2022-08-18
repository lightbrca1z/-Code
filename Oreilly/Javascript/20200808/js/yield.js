//ある範囲の整数群を生成するジェネレータ関数。
function* range(from, to){
    for(let i = from;i <= to; i++){
        yield i;
        console.log(i);
    }
}

range(1,10);
console.log("hello, world!");