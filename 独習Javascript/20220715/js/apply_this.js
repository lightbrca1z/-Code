const taro = {name: "太郎"};

function hello(greeting, name){
    console.log(`${greeting},${name}`);
}

hello.apply(null,["こんにちは",太郎]);