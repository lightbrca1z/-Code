<?php

print(preg_match('/I like (?i:PHP)/', 'I like pHp'));
print "<br/>";
print(preg_match('/eat (?ix:foo     d)/', 'eat FoOD'));

?>