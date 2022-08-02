<?php

function myGen(){
    //foreachの値に一つずつ入る。
    yield 'あいうえお';
    yield 'かきくけこ';
    yield 'さしすせそ';
}

foreach(myGen() as $value){
    print $value.'<br/>';
}

?>