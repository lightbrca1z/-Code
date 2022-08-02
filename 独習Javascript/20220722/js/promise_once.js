let count = 0;

function promiseFactory(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           count++;
           
           console.log(`${count}回目のコールです。時刻:[${new Date().toTimeString()}]`);

           if(count === 3){
            reject(count);
           }else{
            resolve(count);
           }
        }, 1000);
    });
}

const instance = promiseFactory();

instance
.then(() => {return instance;})
.then(() => {return instance;})
.then(() => {return instance;})
.catch( errorCount => {
    console.error(`エラーに飛びました。現在のカウントは${errorCount}です。`);
}).finally(() => {
    console.log("処理を終了します。");
});
