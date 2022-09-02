<?php

print(preg_match("/\$5\.00/", "Your bill is $5.00 exactly"));
print "<br/>";
print(preg_match("/$5.00/","Your bill is $5.00 exactly"));

?>