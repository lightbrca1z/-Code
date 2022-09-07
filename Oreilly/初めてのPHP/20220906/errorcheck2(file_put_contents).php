<?php
$_SESSION['username'] = "micheal";

$page = file_get_contents('page-template.html');

$page = str_replace('{page_title}','Welcome',$page);

//午後は青、午前は緑。
if(date('H') >= 12){
    $page = str_replace('{color}', 'blue', $page);
}else{
    $page = str_replace('{color}', 'green', $page);
}

$page = str_replace('{name}',$_SESSION['username'], $page);

$result = file_put_contents('page.html', $page);

header('location:page.html');

if(($result === false) || ($result == -1)){
    print "Couldn't save HTML to page.html";
}