<?php

$data = ['Tennis','Swimming','Soccer','Baseball'];
sort($data,SORT_STRING);
print_r($data);
print "<br/>";
rsort($data,SORT_STRING);
print_r($data);
print "<br/>";
$data2 = ['Tennis' => 1,'Swimming' => 1,'Soccer' => 11,'Baseball' => 9];
sort($data2,SORT_NUMERIC);
print_r($data2);
print "<br/>";
$data3 = ['Tennis' => 1,'Swimming' => 1,'Soccer' => 11,'Baseball' => 9];
asort($data3,SORT_NUMERIC);
print_r($data3);
print "<br/>";
ksort($data3,SORT_STRING);
print_r($data3);

?>