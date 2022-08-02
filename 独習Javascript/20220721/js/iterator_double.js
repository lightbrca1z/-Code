//イテレータの定義(渡された値を2倍にする)
function doubleIterator(){
    let index = 0;
    let arry = this;

    return{
        next(){
            if(index < arry.length){
                return{
                    done:false,
                    value: arry[index++] * 2
                }
            }else{
                return{
                    done:true
                }
        }
    }
}
}

//イテレータ登録前の確認
for(let item of[1,2,3]){
    console.log(item);
}

Array.prototype[Symbol.iterator] = doubleIterator;

for(let item of [1,2,3]){
    console.log(item);
}