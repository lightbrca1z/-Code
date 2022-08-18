<?php

class Entree{
    private $name;
    protected $ingredients = array();

    public function getName(){
        return $this->name;
    }

    public function __construct($name, $ingredients){
        if(! is_array($ingredients)){
            throw new Exception('$ingredients must be an array');
        }
        $this -> name = $name;
        $this -> ingredients = $ingredients;
    }

    public function hasIngredient($ingredient){
        return in_array($ingredient, $this->ingredients);
    }

    public static function getSizes(){
        return array('small','meidum','large');
    }
}

?>