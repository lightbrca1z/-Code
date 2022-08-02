function hello(personName){
    if(typeof personName !== "string"){
        console.log("引数に文字列を渡してください。");
        return;
    }
    console.log(`こんにちは、${personName}`);
}

hello("太郎");

hello(1);