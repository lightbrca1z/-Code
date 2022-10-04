$(() => {alert($('a').attr('id'));

$('a').attr('target', '_top');

$('a').attr({title: 'ジャンプ', target: '_blank'});

$('a').attr('title', function(idx, value){
    return (idx + 1) + '.' + this.textContent +
    'のWebサイト(' + this.href + ')に' + value;
});

$('a').removeAttr('target');

var link03 = document.getElementById('link03');
link03.title = 'JQueryのWebサイトへ';
link03.target = '_blank';
});