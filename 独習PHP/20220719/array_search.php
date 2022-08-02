<?php
$data = ['PHP','JavaScript','PHP','Java','C#','15'];
$data2 = [ 'X' => '10', 'Y' => 20, 'Z' => 30];
var_dump(array_search('JavaScript',$data));
print "<br/>";
var_dump(array_search('PHP',$data));
print "<br/>";
var_dump(array_search('JAVA',$data));
print "<br/>";
var_dump(array_search(15,$data));
print "<br/>";
var_dump(array_search(15,$data,true));
print "<br/>";
var_dump(array_search(10,$data2));

?>