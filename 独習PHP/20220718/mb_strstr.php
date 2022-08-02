<?php

$str = 'WINGSプロジェクト';
print mb_strstr($str,'S',true)."<br/>";
print mb_strstr($str,'S')."<br/>";
print mb_strstr($str,'M',false);
?>