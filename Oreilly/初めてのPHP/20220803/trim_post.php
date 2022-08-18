<?php

$zipcode = trim($_POST['zipcode']);

$zip_length = strlen($zipcode);

if($zip_length != 7){
    print "Please enter a ZIP code that is 5 characters long."."<br/>";
}else{
    print "Clear!"."<br/>";
}

if(strcasecmp($_POST['email'],'president@whitehouse.gov') == 0){
    print "Welcome, Mr.President."."<br/>";
}else{
    print "Welcome, Guest!"."<br/>";
}

?>