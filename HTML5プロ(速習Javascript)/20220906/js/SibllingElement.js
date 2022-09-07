window.onload = function(){
    var main = document.getElementById('main');
    
    // 子要素の最初のものを取得
    var firstChild = main.firstElementChild;

    // 子要素の最後のものを取得
    var lastChild = main.lastElementChild;

    var next = firstChild.nextSibling;
    console.log(next);

    var nextEl = firstChild.nextElementSibling;
    console.log(nextEl);

    var prev = lastChild.previousSibling;
    console.log(prev);

    var prevEl = lastChild.previousElementSibling;
    console.log(prevEl);

};