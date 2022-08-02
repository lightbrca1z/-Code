<?php
$str = 'にわにはにわにわとりがいる';
print "結果:".mb_substr_count($str, 'にわ')."<br/>";
$str = 'いちいちいちばにいち';
print "結果:".mb_substr_count($str,'いちいち');