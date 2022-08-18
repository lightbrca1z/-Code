<?php

$array = array("really long string here, boy","this","middling length","larger");
$sortOption = 'random';

usort($array, function($a,$b) use ($sortOption)
{
    if($sortOption == 'random'){
        //ランダムにソートするために、-1,0,1のいずれかの値を無作為に返します。
        return rand(0,2) - 1;
    }else{
        return strlen($a) - strlen($b);
    } 
});

print_r($array);
?>