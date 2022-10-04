var i = 0;

try{
    if(i === 0){
        throw "iが0!";
    }
}catch (e){
    console.log(e);
}finally{
    console.log("終了処理");
}