const taro = {name:"太郎"};

function hello(greeting){
    console.log(`${greeting},${this.name}`);
}

hello.call(taro, "こんにちは");