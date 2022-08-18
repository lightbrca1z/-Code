<?php

function restaurant_check($meal,$tax,$tip){
    $tax_amount = $meal * ($tax / 100);
    $tip_amount = $meal * ($tip / 100);
    $total_notip = $meal + $tax_amount;
    $total_tip = $meal + $tax_amount + $tip_amount;

    return array($total_notip,$total_tip);
}

$total = restaurant_check(15.22,8.25,15);

if($total[0] > 20){
    print "The total without tip is less than $20";
}if($total[1] < 20){
    print "The totla with tip is less than $20.";
}

?>