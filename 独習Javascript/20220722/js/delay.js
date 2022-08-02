function delay1(fn, message, ms){
    setTimeout(function(){
        fn(message);
    },ms);
}

function log(msg){
    console.log(msg);
}

function alertMsg(msg){
    alert(msg);
}

delay1(log,"こんにちは。",1000);

delay1(alertMsg,"さようなら",2000);

delay1(function(message1){
    console.log(message1); // 「1秒経ちました。」
    //delayのコールバック関数内でさらにdelayを実行。

    delay1(function(message2){
        console.log(message2);
    },"さらに1秒経ちました。",1000);
},"1秒経ちました。",1000);
