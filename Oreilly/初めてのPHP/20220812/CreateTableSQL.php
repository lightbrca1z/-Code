<?php

try{
  $db = new SQLite3('/Users/lighttobrca/mydb.db');
  $db->exec("CREATE TABLE dishes(dish_size VARCHAR(255), dish_name VARCHAR(255),
price DECIMAL(4,2), is_spicy INT)");
//   $db->exec("Insert into dishes(dish_id,dish_name,price,is_spicy)
//    values(1,'fish', 3000, 0)");
   print "Success create table!";
}catch(exception $e){
    print "Couldn't create table: ".$e->getMessage();
}

?>