<?php
$data = ['img15.png','img5.png','img2.png','img18.png','img3.png'];
//切り替え1
// sort($data,SORT_STRING);
//切り替え2
sort($data,SORT_NATURAL);
print_r($data);

?>