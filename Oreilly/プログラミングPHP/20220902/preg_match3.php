<?php

print(preg_match('/I like (?i:PHP)/', 'I like pHp'));
print "<br/>";
print(preg_match('/I (like (?i:PHP)) a lot/', 'I like pHp a lot', $match));
print_r($match);
?>