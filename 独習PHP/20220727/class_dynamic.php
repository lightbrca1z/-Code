<?php

require_once './Person/Person2.php';

$p1 = new Person();
$p1->lastName = '山田';
$p1->firstName = '太郎';
$p1->age = 52;
print $p1->age;

?>