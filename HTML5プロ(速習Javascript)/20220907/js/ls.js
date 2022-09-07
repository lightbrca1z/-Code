window.onload = function(){
    var body = document.getElementsByTagName('body')[0];
    var boxes = document.getElementsByClassName('box');

    for (var i = 0, l = boxes.length; i < l; i++){
        boxes[i].addEventListener('click', function(){
            body.style.backgroundColor = this.id;
        });
    }
}