<?php

function complete_bill($meal,$tax,$tip,$cash_on_hand){
    $tax_amount = $meal * ($tax / 100);
    $tip_amount = $meal * ($tip / 100);
    $total_amount = $meal + $tax_amount + $tip_amount;

    if($total_amount > $cash_on_hand){
        //請求額が手持ちより高い。
        return false;
    }else{
        //支払いができる。
        return $total_amount;
    }

}

if($total = complete_bill(15.22,8.25,15,20)){
    print "I'm happy to pay $total.";
}else{
    print "I don't have enough money. Shall I wash some dishes?";
}

?>