const stats = (function(){
    //モジュールに閉じたユーティリティ関数。
    const sum = (x,y) => x + y;
    const square = x => x * x;

    //エクスポートする公開関数。
    function mean(data){
        return data.reduce(sum)/data.length;
    }

    //エクスポートする公開関数。
    function stddev(data){
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum)/(data.length -1)
        );
    }
    
    return { mean, stddev};
}());

console.log(stats.mean([1,3,5,7,9]));
console.log(stats.stddev([1,3,5,7,9]));