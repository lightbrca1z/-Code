<?php

print "This is always printed."."<br/>";
$logged_in = 1;

if($logged_in){
    print "welcome aboard, trusted user."."<br/>";
    print "This is only printed if $logged_in is true"."<br/>";
}
print "This is also always printed."."<br/>";

?>