window.onload = function(){
    var element = document.createElement('p');
    element.innerText = 'これは追加された要素です。';

    var main = document.getElementById('main');
    main.insertBefore(element, main.firstElementChild);
};