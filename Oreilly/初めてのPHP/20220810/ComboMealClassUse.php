<?php

include('ComboMealClass.php');

//名前と材料を持つスープ
$soup = new Entree('Chicken Soup',array('chicken','water'));

//名前と材料を持つサンドイッチ
$sandwich = new Entree('Chicken Sandwich', array('chicken','bread'));

//セット料理
$combo = new ComboMeal('Soup + Sandwich', array($soup, $sandwich));

foreach(['chicken','water','pickles'] as $ing){
    if ($combo -> hasIngredient($ing)){
        print "Something in the combo contains $ing<br/>";
}
}

?>