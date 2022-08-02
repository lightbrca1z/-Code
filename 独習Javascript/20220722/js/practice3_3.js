new Promise ((resolve,reject) => {
    setTimeout(() => {
        const date = new Date; //現在日時の取得
        const second = date.getSeconds();
        // 2で割った余りが、または1で条件分岐
        
        if( second % 2){
            //奇数。1の時、(true)
            reject(second);
        }else{
        //偶数 (false) , 0の時。
                resolve(second);
        }
},1000);

}).then(second => {
    console.log(`${second}は偶数のため、成功とします。`);
}).catch(second =>{
    console.error(`${second}は奇数のため、エラーとします。`);
}).finally(() =>{
    console.log("処理を終了します。");
})