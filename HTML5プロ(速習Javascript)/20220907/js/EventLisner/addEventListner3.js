window.onload = function(){
    var main = document.getElementById('main');
    var target = document.getElementById('target');

    main.addEventListener('click', function(){
        console.log(this);
    });
    target.addEventListener('click', function(event){
        console.log(this);
        event.stopPropagation();
    })
}