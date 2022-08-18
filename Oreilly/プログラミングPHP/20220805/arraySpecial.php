<?php
$meals = array('Walnut Bun' => 1,
              'Cashew Nuts and White Mushrooms' => 4.95,
              'Dried Mulberries' => 3.00,
              'Eggplant with Chili Sauce' => 6.50,
              'Shrimp Puffs' => 0); //Shrimp Puffs are free!
$books = array("The Eater's Guide to Chinese Characters",
              "How to Cook and Eat in Chinese");

//これはtrue: キーDried Mulberriesの値は3.00
if(in_array(3,$meals)){
    print 'There is a $3 item.'."<br/>";
}
//これはtrue
if(in_array('How to Cook and Eat in Chinese',$books)){
    print "We have How to Cook and Eat in Chinese."."<br/>";
}
//これはfalse:in_array()は大文字小文字を区別する。
if(in_array("the eater's guide to chinese characters", $books)){
    print "We have The Eater's Guide to Chinese Characters."."<br/>";
}
