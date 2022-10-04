<?php
try{
    $database = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}
$sql = "CREATE TABLE 'books' ('bookid' INTEGER PRIMARY KEY, 
'authorid' INTEGER,
'title' TEXT,
'ISBN' TEXT,
'pub_year' INTEGER,
'available' INTEGER
)";

$error = "";

try{
    !$database->query($sql); 
}catch(Exception $error){
    echo "作成に失敗 - {$error}<br />";
}finally{
    echo "テーブル作成に成功！<br/>";
}

$sql = <<<SQL
INSERT INTO books ('authorid','title','ISBN', 'pub_year', 'available') 
VALUES (1,'二つの塔','0-261-10236',1954,1);
INSERT INTO books ('authorid','title','ISBN', 'pub_year', 'available') 
VALUES (1,'王の帰還','0-261-10237',1955,1);
INSERT INTO books ('authorid','title','ISBN', 'pub_year', 'available') 
VALUES (2,'ルーツ','0-440-17464',1974,1);
INSERT INTO books ('authorid','title','ISBN', 'pub_year', 'available') 
VALUES (4,'われはロボット','0-553-29438',1950,1);
INSERT INTO books ('authorid','title','ISBN', 'pub_year', 'available') 
VALUES (1,'ファウンデーション','0-553-80371-9',1951,1);
SQL;

try{
    !$database->query($sql); 
}catch(Exception $error){
    echo "追加に失敗 - {$error}<br />";
}finally{
    echo "AuthorsへのInsert - OK<br />";
}

?>