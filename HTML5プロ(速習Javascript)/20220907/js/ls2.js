window.onload = function(){
    var body = document.getElementsByTagName('body')[0];
    var boxes = document.getElementsByClassName('box');

    // localStorageを変数に格納
    var storage = localStorage;
    // localStorageから'background'の値を取得
    var bg = storage.getItem('background');
    // localStorageに'background'の値があれば、
    // 背景色を書き換え
    if (bg){
        body.style.backgroundColor = bg;
    }

    for (var i = 0, l = boxes.length; i < l; i++){
        boxes[i].addEventListener('click', function(){
            body.style.backgroundColor = this.id;
            // localStorageの'background'にthis.idを格納
            storage.setItem('background', this.id);
        });
    }
}