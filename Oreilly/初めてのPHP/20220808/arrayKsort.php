<?php

$meal = array('breakfast' => 'Walnut Bun',
              'lunch' => 'Cashew Nuts White Mushrooms',
              'snack' => 'Dried Mulberries',
              'dinner' => 'Eggplant with Chili Sauce');
print "Before Soritng:<br/>";
foreach($meal as $key => $value){
    print "\$meal : $key $value<br/>";
}

ksort($meal);

print "After Sorting:<br/>";

foreach($meal as $key => $value){
    print "\$meal: $key $value<br/>";
}

?>