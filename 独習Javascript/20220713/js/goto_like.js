block:{
    const rand = Math.random();
    if(rand > 0.5){
        break block;
    }
    console.log("0.5より大きいときはスキップされます。");
}
console.log("blockの後続処理です。");