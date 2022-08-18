<?php

try{
  $db = new PDO('sqlite:/Users/lighttobrca/mydb.db');
  $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  $affectedRows = $db->exec("INSERT INTO dishes(dish_size,dish_name,price,is_spicy)
  VALUES ('large','Sesame Seed Puff', 2.50, 0)");
   print "Success create table!";
}catch(PDOexception $e){
    print "Couldn't create table: ".$e->getMessage();
}

?>