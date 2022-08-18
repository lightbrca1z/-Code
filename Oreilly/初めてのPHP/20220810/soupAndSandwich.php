<?php

include('EntreeClass.php');

//インスタンスを生成して、$soupに割り当てる。
$soup = new Entree('Chiken Soup', array('chicken','water'));
//$soupのプロパティを設定する。
// $soup->name = 'Chicken Soup';
// $soup->ingredients = array('chicken','water');

//別のインスタンスを生成して$sandwichに割り当てる。
$sandwich = new Entree('Chicken Sandwich', array('chicken', 'bread'));
//$sandwichのプロパティを設定する。;
// $sandwich->name = 'Chicken Sandwich';
// $sandwich->ingredients = array('chicken', 'bread');

foreach(['chicken','lemon','bread','water'] as $ing){
    if($soup -> hasIngredient($ing)){
        print "soup contains $ing.<br/>";
    }
    if($sandwich->hasIngredient($ing)){
        print "Sandwich contains $ing.<br/>";
    }
}

?>