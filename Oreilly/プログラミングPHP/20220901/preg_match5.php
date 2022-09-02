<?php

print(preg_match("/[0123456789]%/", "we are 25% complete"));
print "<br/>";
print(preg_match("/cat|dog/", "the cat rubbed my legs"));
print "<br/>";
print(preg_match("/cat|dog/", "the dog rubbed my legs"));
print "<br/>";
print(preg_match("/cat|dog/", "the rabbit rubbed my legs"));

?>