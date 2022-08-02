window.name = "花子";

const taro  = {
    name: "太郎",
    hello: function(){
        console.log("こんにちは," + this.name);
    }
}

// 2秒後に"こんにちは、太郎"とコンソールに表示される。
setTimeout(taro.hello.bind(taro),2000);
setTimeout(taro.hello, 3000);