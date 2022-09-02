<?php
//バックスラッシュではない。"×" => "\", "○" => "/"
print(preg_match("/c.t/", "cat"));
print "<br/>";
print(preg_match("/c.t/", "cut"));
?>