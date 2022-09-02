<?php

print(preg_match("/^([a-z]|[0-9])/", "The quick brown fox"));
print "<br/>";
print(preg_match("/^([a-z]|[0-9])/", "jumped over"));
print "<br/>";
print(preg_match("/^([a-z]|[0-9])/", "10 lazy dogs"));


?>