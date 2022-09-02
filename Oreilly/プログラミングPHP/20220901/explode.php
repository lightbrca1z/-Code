<?php
$input = 'Fred,25,Wilma';
$fields = explode(',',$input);
print_r($fields);
echo "<br/>";
$fields = explode(',', $input, 2);
print_r($fields);
?>