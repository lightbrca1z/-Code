<?php

$string = 'Hello';
for($i=0;$i<strlen($string); $i++){
    printf("%d番目の文字は%sです\n", $i, $string[$i]);
    echo "<br/>";
}

?>