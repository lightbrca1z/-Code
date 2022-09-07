<?php

trait Command
{
    function run()
    {
        echo "コマンドを走らせます。<br/>";
    }
}

trait Marathon
{
    function run()
    {
        echo "マラソンを走ります。<br/>";
    }
}

class Person
{
    use Command, Marathon{
        Marathon::run insteadof Command;
    }
}

// $person = new Person;
// $person->run();

?>