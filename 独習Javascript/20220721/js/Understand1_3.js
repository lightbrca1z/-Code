Array.prototype[Symbol.iterator] = function(){
    let index = 0;
    // インスタンスにアクセスする際にはthisを使用
    let arry = this;

    return{
        next(){
            if(index < arry.length){
                //インデックスが配列の長さより小さい場合には反復処理を継続
                return{
                    done:false,
                    //インデックスと値をペアで返す。
                    value:[index,arry[index++]],
                };
            }else{
                return{
                    done:true,
                };
            }
        },
    };
};

for (let item of ["Hello","World"]){
    console.log(item);
}