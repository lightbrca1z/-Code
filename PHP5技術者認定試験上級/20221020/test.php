<?php
function func($x,$y){
   if($x == 5) {
       return -1;
   } else if($y == 5) {
        return 1;
   } else {
        // echo "value : " .($x -$y)."<br/>";
       return $x -$y;
   }
}
// $a = array(8,2,3,6,7,9,1,5,4);
$a = array(9,1,2,3,5,6,4);
usort($a,'func');
foreach($a as $v){
    echo $v;
}
?>