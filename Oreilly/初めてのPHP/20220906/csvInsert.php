<?php
try{
    $db = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}
$fh = fopen('dishes.csv','rb');
$stmt = $db->prepare('INSERT INTO dishes (dish_name,price,is_spicy)
                                  values (?,?,?)');
while((!feof($fh)) && ($info = fgetcsv($fh))){
    //info[0]は料理名
    //info[1]は値段
    //info[2]は辛さ
    $stmt->execute($info);
    print "Inserted $info[0]<br/>";
}

fclose($fh);

?>