<?php

$week_name = ['日','月','火','水','目','金','土'];
// echo $week_name[1];

date_default_timezone_set('Asia/Tokyo');
$week = date('w');
echo $week_name[$week];
echo "今日は、$week_name[$week]曜日です";

?>