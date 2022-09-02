<?php
//バックスラッシュではない。"×" => "\", "○" => "/"
print(preg_match("/^cow/", "Dave was a cowhand"));
print "<br/>";
print(preg_match("/^cow/", "cowabunga!"));
?>