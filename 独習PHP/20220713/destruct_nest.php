<?php
$data = [1,2,[31,32,33]];

[$a,$b,$c] = $data;
print_r($a);
print "<br/>";
print_r($b);
print "<br/>";
print_r($c);
print "<br/>";

[$x,$y,[$z1,$z2,$z3]] = $data;
print $x."<br/>";
print $y."<br/>";
print $z1."<br/>";
print $z2."<br/>";
print $z3."<br/>";
?>