<?php

$array = array("really long string here, boy","this","middling length","larger");
$sortOption = "random";

function sortNonrandom($array){
    $sortOption = false;

    usort($array, function($a,$b) use ($sortOption){
        if($sortOption == "random"){
            //ランダムにソートするために、-1,0,1のいずれかを返す。
            return rand(0,2) - 1;
        }else{
            return strlen($a) - strlen($b);
        }
    });

    print_r($array);
}

print_r(sortNonrandom($array));

?>