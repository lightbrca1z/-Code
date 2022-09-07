window.onload = function(){
    var target = document.getElementById('target');

    var changeText = function(target, str){
        target.innerText = str;
    };

    if(target.addEventListener){
        target.addEventListener('click', function(){
            changeText(this, 'クリックされました。');
        });
    }else if (target.attachEvent){
        target.attachEvent('click', function(){
            changeText(this, 'クリックされました。');
        });
    }
};