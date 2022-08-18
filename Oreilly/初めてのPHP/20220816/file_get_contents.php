<?php

//上記の例からテンプレートファイルを読み込む
$page = file_get_contents('page-template.html');

//ページのタイトルを挿入する。
$page = str_replace('{page_title}','Welcome',$page);

//ページの色を午後は青、
//午前は緑にする。

if(true){
    $page = str_replace('{color}','blue',$page);
}else{
    $page = str_replace('{color}','green',$page);
}

//以前に保存したセッション変数から
//ユーザー名を取得する。
$_SESSION['username'] = "micheal";
$page = str_replace('{name}',$_SESSION['username'], $page);

//結果を出力する。
print $page;

?>