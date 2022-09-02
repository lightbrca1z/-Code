<?php

print(preg_match("/c[aeiou]t/", "I cut my hand."));
print "<br/>";
print(preg_match("/c[^aeiou]t/", "Reboot chthon."));

?>