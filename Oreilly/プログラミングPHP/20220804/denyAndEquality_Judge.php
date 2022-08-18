<?php
//$finishedがfalseであれば、テスト式($finished == false)全体は
//trueになる。

$finished = false;

//等価演算子 equality operator
if($finished == false){
    print 'Not done yet!'."<br/>";
}

//$finishedがfalseであれば、テスト式(! $finished)全体は、
//trueになる。

//不等価演算子 inequality operator

if(! $finished){
    print 'Not done yet!'."<br/>";
}

?>