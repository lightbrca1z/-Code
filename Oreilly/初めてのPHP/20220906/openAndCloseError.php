<?php
try{
    $db = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Coludn't connect to database: ". $e->getMessage();
    exit();
}

$fh = fopen('dishes.txt','wb');
if(! $fh){
    print "Error opening dishes.txt: $php_errormsg";
}else{
    $q = $db->query("SELECT dish_name, price FROM dishes");
    while($row = $q -> fetch()){
        fwrite($fh, "The Price of $row[0] is $row[1] \n");
    }
    if(! fclose($fh)){
        print "Error closing dishes.txt: $php_errormsg";
    }
}

?>