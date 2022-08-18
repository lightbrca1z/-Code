<?php

$a = 1 <=> 12.7;

$b = "charlie" <=> "bob";

$x = '6 pack' <=> '55 card stud';

if($x > 0){
    print 'The string "6 pack" is greater than the string "55 card stud".'."<br/>";
}elseif($x < 0){
    print 'The string "6 pack" is less than the string "55 card stud".'."<br/>";
}

$x = '6 pack' <=> 55;
if($x > 0){
    print 'The string "6 pack" is greater than the number 55.'."<br/>";
}elseif($x < 0){
    print 'The string "6 pack" is less than the number 55.'."<br/>";
}

?>