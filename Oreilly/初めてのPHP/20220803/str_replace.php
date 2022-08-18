<?php
$my_class = "lunch";
$html = '<span class="{class}">Fried Bean Curd<span>
<span class="{class}">Oil-Soaked Fish</span>';

// print $html;
print str_replace('{class}',"lunch",$html);
?>