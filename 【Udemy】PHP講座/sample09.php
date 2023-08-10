<?php

date_default_timezone_set('Asia/Tokyo');

for($i=0;$i<366;$i++):
    $time = strtotime("+$i day");
    $day = date('n/j(D)',$time);
    echo $day,'<br>';
endfor;


// $time = time();
// echo $time.'<br>';

// $time = strtotime('+2 day');

// echo $time.'<br>';

// $day = date('n/j(D)',$time);
// echo $day,'<br>';


?>