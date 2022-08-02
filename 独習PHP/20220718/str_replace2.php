<?php
$str = ['PHPは良い言語です。','PHPは良いサーバー実行環境です。'];
$src = ['PHP','良い'];
$rep = ['PHP 8','素晴らしい'];
print_r(str_replace($src,$rep,$str,$cnt));
print "<br/>"."{$cnt}個の置き換えをしました。";
?>