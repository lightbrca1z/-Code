const prom = new Promise(resolve => {
    setTimeout(() => resolve("この値を取り出します。"
    ), 1000)
});

async function asyncFunction(){
    const value = await prom;
    console.log(value);
}

asyncFunction();
