<?php

require_once '../20220727/Inheritance/Person.php';

$p1 = new Person('リオ','山田');

$p2 = $p1;

//オブジェクト変数に参照渡しした場合
var_dump($p1 == $p2);
var_dump($p1 === $p2);


//オブジェクト変数を値渡し(コピー)した場合
$p3 = clone $p1;
var_dump($p1 == $p2);
var_dump($p1 === $p2);

?>