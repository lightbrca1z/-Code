var ws;
ws = new WebSocket("ws://localhost:8888/HTML5プロ(速習Javascript)/20221014/index.html");

//コネクションオープン時のコールバック間数登録
ws.onopen = function(){
    console.log("コネクションオープン");
}
//エラー発生時のコールバック間数登録
ws.onerror = function(error){
    console.log("エラー発生 : " + error);
}

//コネクションクローズ時のコールバック間数登録
ws.onclose = function(event){
    //切断が完全に完了したかどうか
    if(event.wasClean){
        var closed = "完了";
    }else{
        var closed = "未完了";
    }
    console.log("切断処理: " + closed);
    console.log("コード: " + event.code);
    console.log("理由: " + event.reason);
}

//メッセージ受信時のコールバック間数登録
ws.onmessage = function(evt){
    console.log("受診メッセージ: " + evt.data);
}

//メッセージ送信
function Send(message){
    ws.send(message.value);
    console.log("送信メッセージ:" + message.value);
}

//終了時に明示的に接続を閉じる
window.onunload = function(){
    var code = 4000;
    var reason = "クライアントが閉じられました。";;
    ws.close(code, reason);
}
