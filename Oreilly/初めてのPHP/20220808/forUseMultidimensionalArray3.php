<?php

$specials = array(array('Chestnut Bun', 'Walnu Bun', 'Peanut Bun'),
                 array('Chestnut Salad', 'Walnut Salad', 'Peanut Salad'));
//$num_specialsは2:$specialsの第1次元の要素数
for($i = 0, $num_specials = count($specials); $i < $num_specials;$i++){
    //$num_subは3:各サブ配列の要素数
    for($m = 0, $num_sub = count($specials[$i]); $m < $num_sub;$m++){
        print "Element [$i][$m] is ". $specials[$i][$m]."<br/>";
    }
}

?>