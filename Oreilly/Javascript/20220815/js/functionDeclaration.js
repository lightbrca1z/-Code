
function printprops(o){
    for(let p in o){
        console.log(`${p}:${o[p]}\n`);
    }
}

    //デカルト座標(x1,y1)と(x2,y2)の間の距離を計算する。
    function distance(x1,y1,x2,y2){
        let dx = x2 - x1;
        let dy = y2- y1;
        return Math.sqrt(dx*dx + dy*dy);
    }

    //階乗を計算する再帰関数(自分自身を呼び出す関数)。
    // x!は、x以下すべての正の整数の積。
    function factorial(x){
        if (x <= 1) return 1;
        return x * factorial(x-1);
    }

    console.log(distance(2,2,4,4));
    console.log(factorial(4));
