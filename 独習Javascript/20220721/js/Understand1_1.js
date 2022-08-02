function genStep(min,max,step){
    let currentValue = min - step;

    return{
        next(){
            currentValue += step;
            //currentValueがmaxより大きいとき、反復終了。
            if(currentValue > max){
                return{
                    done:true
                }
            }else{
                return{
                    done:false,
                    value:currentValue
                }
            }
    }
}
}

const it = genStep(4,10,2);
let a = it.next();

while(!a.done){
    console.log(a.value);
    a = it.next();
}