onmessage = function(event){
    var message = event.data;
    //ここに処理を記述する。
    var result = "処理結果";
    this.postMessage(result);
}