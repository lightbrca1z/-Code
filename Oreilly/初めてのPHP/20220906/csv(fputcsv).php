<?php
try{
    $db = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}

$fh = fopen('dish-lish.csv','wb');

$dishes = $db->query('SELECT dish_name, price, is_spicy FROM dishes');
while($row = $dishes->fetch(PDO::FETCH_NUM)){
    fputcsv($fh, $row);
}
fclose($fh);
print "success!";
?>