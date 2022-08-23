$(() => {
$('#msgbtn').click(function(){
    $('<p>ボタンがクリックされました。</p>').appendTo('#main');
});

$('#clear').click(function(){
    $('#main p').remove();
});
});