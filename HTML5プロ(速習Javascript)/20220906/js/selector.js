window.onload = function(){
    var targets = document.querySelectorAll('p.hoge');
    
    for(var i = 0, l = targets.length; i < l; i++){
        targets[i].style.color = 'red';
    }
}