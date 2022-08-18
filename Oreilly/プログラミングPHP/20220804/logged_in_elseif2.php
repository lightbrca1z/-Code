<?php

$logged_in = rand(0,2) - 1;
$new_messages = rand(0,2) - 1;
$emergency = rand(0,2) - 1;

if($logged_in){
    // $logged_inがtrueのときに実行する。
    print "welcome aboard, trusted user."."<br/>";
    // print $logged_in;
}elseif($new_messages){
    //$logged_inがfalseたが、$new_messagesがtrueの時に実行する。
    print "Dear stranger, there are new messages."."<br/>";
    // print $new_messages;
}elseif($emergency){
    //$logged_inと$new_messagesがfalseだが
    //$emergencyがtrueのときに実行する。
    print "Stranger, there are no new messages, but there is an emergency."."<br/>";
    // print $emergency;
}else{
    print "I don't know you, you have no messages, and there's no emergency."."<br/>";
}

?>