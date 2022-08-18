<?php

class Entertainment {}

class Clown extends Entertainment {}

class Job {}

function handleEntertainment (Entertainment $a, callable $callback = NULL){
    echo "Handling".get_class($a)."fun<br/>";

    if ($callback !== NULL){
        $callback();
    }
}

$callback = function()
{
    //何かあをします。
};

handleEntertainment(new Clown);
// handleEntertainment(new Job, $callback);


?>