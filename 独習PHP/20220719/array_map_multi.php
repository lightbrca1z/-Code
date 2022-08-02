<?php
$data1 = [1,3,5,6];
$data2 = [2,7,10];

$result = array_map(
    function($v1,$v2){
        return $v1 * $v2;
    },$data1,$data2
);

print_r($result);

?>