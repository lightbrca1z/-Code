window.name = "花子";

const taro = {
    name: "太郎",
    hello: function(){
        console.log("こんにちは, " + this.name);
    }
}

const helloWho = taro.hello;
helloWho();