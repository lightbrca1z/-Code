window.onload = function(){
    var target = document.getElementById('target');

    target.addEventListener('click', function(){
        this.innerText = 'クリックされました。';
    });
};