<?php

$_POST['user'] = "dishes.txt";

$user = str_replace('/', '', $_POST['user']);

$user = str_replace('..','',$user);

if(is_readable("./$user")){
    print 'User profile for'.htmlentities($user).': <br/>';
    print file_get_contents("./$user");
}

?>