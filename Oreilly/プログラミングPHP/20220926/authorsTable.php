<?php
try{
    $database = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}
$sql = "CREATE TABLE 'authors' ('authorid' INTEGER PRIMARY KEY, 'name' TEXT)";

$error = "";

try{
    !$database->query($sql); 
}catch(Exception $error){
    echo "作成に失敗 - {$error}<br />";
}finally{
    echo "テーブル作成に成功！<br/>";
}

$sql = <<<SQL
INSERT INTO 'authors' ('name') VALUES ('J.R.R.トールキン');
INSERT INTO 'authors' ('name') VALUES ('アレックス・ヘイリー');
INSERT INTO 'authors' ('name') VALUES ('トム・クランシ');
INSERT INTO 'authors' ('name') VALUES ('アイザック・アシモフ');
SQL;


try{
    !$database->query($sql); 
}catch(Exception $error){
    echo "追加に失敗 - {$error}<br />";
}finally{
    echo "AuthorsへのInsert - OK<br />";
}

?>