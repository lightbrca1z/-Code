const falsyVal = 0;
if(falsyVal !== null && falsyVal !== undefined){
    console.log("null, undefined以外の値です。");
}else{
    console.log("null, またはundefinedです。");
}