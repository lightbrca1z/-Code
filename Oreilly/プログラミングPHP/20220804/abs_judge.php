<?php

$price_1 = 0.00001;
$price_2 = 0.00001;

if(abs($price_1 - $price_2) < 0.00001){
    print '$price_1 and $price_2 are equal.'."<br/>";
}else{
    print '$price_1 and $price_2 are not equal'."<br/>";
}

?>