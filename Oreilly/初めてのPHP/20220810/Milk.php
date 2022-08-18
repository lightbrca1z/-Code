<?php
include('EntreeClass.php');

try{
$drink = new Entree('Glass of Milk', 'Milk');
if($drink->hasIngredient('milk')){
    print "Yummy!";
}
}catch(Exception $e){
    print "Couldn't create the drink: ". $e->getMessage();
}

?>