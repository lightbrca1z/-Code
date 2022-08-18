<?php

$dinner = 'Curry Cuttlefish';

function macrobiotic_dinner(){
    $dinner = "Some Vegetables";
    print "Dinner is $dinner";
    //海の恵みに屈する。
    print " but I'd rather have";
    print $GLOBALS['dinner'];
    print "<br/>";
}
macrobiotic_dinner();
print "Regular dinner is: $dinner";

?>