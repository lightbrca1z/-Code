function processData(data){
//受信したデータの中身の処理(割愛)
}
function handler(){
if(this.readyState == this.DONE){
    if(this.status == 200 && 
        this.responseXML != null &&
        this.responseXML.getElementById('test').textCotent){
            //readyStateがDONEで200(成功)でresponseXMLがnullでなく、
            //responseXMLにtestというテキストを含み,そのテキスト表現がnullでない時、成功と見なす。
            processData(this.responseXML.getElementById('test').textCotent);
            return;
        //responseXMLの中のtest要素のテキスト表現を引数にprocessData間数を呼び出し、
        //間数をreturnする。
        }
        //something wnet wrong
        //このルートに入っている場合には処理結果が異常となっている。
        processData(null);
        //processData間数は引数をnullとして呼び出す。
    
}
}