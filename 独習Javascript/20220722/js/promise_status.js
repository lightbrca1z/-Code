let promResolve, promReject;

const prom = new Promise((resolve, reject) => {
    promResolve = resolve;
    promReject = reject;
})

console.log(prom);

promResolve("引数");
// promReject();

console.log(prom);
//promResolve("引数")が実行され、fulfilledの状態になる。