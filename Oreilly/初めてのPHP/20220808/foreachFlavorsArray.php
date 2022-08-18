<?php
$flavors = array('Japanese' => array('hot' => 'wasabi',
                                    'salty' => 'soy sauce'),
                 'Chinese' => array('hot' => 'mustard',
                                    'pepper-salty' => 'prickly ash'));

// $cultureはキーで、$culture_flavorsは値(配列)
foreach($flavors as $culture => $culture_flavors){
    // $flavorはキーで、$exampleは値。
    foreach($culture_flavors as $flavor => $example){
        print "A $culture $flavor flavor is $example.<br/>";
    }
}

?>