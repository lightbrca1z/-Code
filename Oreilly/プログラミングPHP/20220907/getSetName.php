<?php

class Person
{
    function getName(){
        return $this->name;
    }

    function setName($newName)
    {
        $this->name = $newName;
    }
}

// $name = "J Doe";
// $person = new Person;
// $person->setName($name);
// print $person->getName();
// $age = 0;
// $person->setName($age);
// print $person->getName();


?>