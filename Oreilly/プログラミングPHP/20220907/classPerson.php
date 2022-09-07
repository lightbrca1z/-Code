<?php

class Person
{
    public $age;

    public function __consturct()
    {
        $this -> age = 0;
    }

    public function incrementAge()
    {
        $this->age += 1;
        $this->ageChanged();
    }

    protected function decrementAge()
    {
        $this->age -= 1;
        $this->ageChanged();
    }

    private function ageChanged()
    {
        echo "年齢が{$this->age}才になりました。";
    }
}

class SupernaturalPerson extends Person
{
    public function incrementAge()
    {
        $this->decrementAge();
    }
}

// $person = new Person;

$person->incrementAge();
// $person->decrementAge();
// $person->ageChanged();

// $person = new SupernaturalPerson;
// $person->incrementAge();

?>