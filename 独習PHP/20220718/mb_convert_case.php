<?php
$data1 = 'Wings project';
$data2 = 'ＷＩＮＧＳプロジェクト';
$data3 = 'Fußball';

print mb_convert_case($data1, MB_CASE_UPPER)."<br/>";
print mb_convert_case($data1, MB_CASE_LOWER)."<br/>";
print mb_convert_case($data1, MB_CASE_TITLE)."<br/>";
print mb_convert_case($data2, MB_CASE_LOWER)."<br/>";
print mb_convert_case($data3, MB_CASE_UPPER)."<br/>";
print mb_convert_case($data3, MB_CASE_UPPER_SIMPLE);
?>