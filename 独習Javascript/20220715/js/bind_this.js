function hello(greeting){
    console.log(greeting + this.name);
}

const taro = {
    name: "太郎"
}

//bindでthisと引数を束縛
const hellotaro = hello.bind(taro,  "こんにちは、");
hellotaro();