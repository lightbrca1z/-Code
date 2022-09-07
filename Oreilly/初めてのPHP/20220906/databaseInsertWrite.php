<?php

try{
    $db = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}

$fh = fopen('dishes.txt', 'wb');


$q = $db->query("Select dish_name, price FROM dishes");
while($row = $q->fetch()){
    fwrite($fh, "The price of $row[0] is $row[1] \n");
}


?>