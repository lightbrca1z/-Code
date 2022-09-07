<?php

$_POST['user'] = "people.txt";

$filename = realpath("./$_POST[user]");


if(is_readable($filename)){
    print 'User profile for '.htmlentities($_POST['user']).': ,<br/>';
    print file_get_contents($filename);
}else{
    print "Invalid user entered.";
}

?>