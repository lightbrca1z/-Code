<?php
$make_things_cheaper = 0;

try{
    $db = new PDO('sqlite:/Users/lighttobrca/mydb.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //高価な料理を削除する。
    if($make_things_cheaper){
        $db->exec("DELETE FROM dishes WHERE price > 19.95");
        print "delete greater than 19.95";
    }else{
        //または、すべての料理を削除する。
        $db->exec("DELETE FROM dishes");
        print "delete all!";
    }
}catch(PDOException $e){
    print "Couln't delete rows : ".$e->getMessage();
}

?>