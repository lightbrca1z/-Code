<?php

$data = ['フレンチブルドッグ','ヨークシャーテリヤ','ダックスフント','ポメラニアン'  ,'コーギー'];
$result = array_filter($data,function($v){
    return mb_strlen($v) < 8;
});
print_r($result);


?>