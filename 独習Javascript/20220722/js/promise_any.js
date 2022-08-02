// resolve()を200ミリ秒後に実行するPromiseインスタンス
const myResolve = new Promise(resolve => {
    setTimeout(() => {
        resolve("resolveが呼ばれました。");
        console.log("myResolveの実行が終了しました。");
    },200);
});

//reject()を100ミリ秒後に実行するPromiseインスタンス(rejectがmyResolveのresolve
// より前に呼び出される。
const myReject = new Promise((_,reject) => {
    setTimeout(() => {
        reject("rejectが呼ばれました。");
        console.log("myRejectの実行が終了しました。");
    }, 100);
});

Promise.any([myReject,myResolve])
.then(value => {
    console.log(value);})
.catch(error => {
    console.log(error);
});