function saySomething(callback){

    const result = callback();
    console.log(`${result},独習太郎!`);
}

function hello(){
    return "こんにちは";
}

function bye(){
    return "さようなら";
}

saySomething(hello);

saySomething(bye);