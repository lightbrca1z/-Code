<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="Search.php" method="post">
        <p>検索項目: <input type="input" name="search1">
        <input type="submit" value="検索"></p>
    </form>
</body>
</html>

<?php
$pdo = "";
try{
    $pdo = new PDO('sqlite:/Users/lighttobrca/restaurant.db');
}catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
}

// <テーブル作成。>
// $sql = "CREATE TABLE 'search' ('searchid' INTEGER PRIMARY KEY, 'name' TEXT)";

// // $error = "";

// try{
//     !$pdo->query($sql); 
// }catch(Exception $error){
//     echo "作成に失敗 - {$error}<br />";
// }finally{
//     echo "テーブル作成に成功！<br/>";
// }

// <Insert文。行追加。>
// $sql = <<<SQL
// delete from 'search';
// INSERT INTO 'search' ('name') VALUES ('チャート式数学1');
// INSERT INTO 'search' ('name') VALUES ('チャート式数学A');
// INSERT INTO 'search' ('name') VALUES ('チャート式数学2');
// INSERT INTO 'search' ('name') VALUES ('チャート式数学B');
// SQL;

// var_dump($sql);

// <SQL実行文>
// try{
//     // <一行実行>。
//     // !$pdo->query($sql);
//     // <複数行実行>。
//     !$pdo->prepare($sql);
//     !$pdo->exec($sql); 
// }catch(Exception $error){
//     echo "追加に失敗 - {$error}<br />";
// }finally{
//     echo "AuthorsへのInsert - OK<br />";
// }

$stmt = "";

if(@$_POST["search1"] != ""){ //IDおよびユーザー名の入力有無を確認
    $stmt = $pdo->query("SELECT * FROM search WHERE name LIKE '%".$_POST["search1"]."%'");
}
?>
<table>
<tr><th>ID</th><th>User Name</th></tr>
<!-- ここでPHPのforeachを使って結果をループさせる -->

<?php
if(@$_POST["search1"] != ""){
foreach ($stmt as $row): ?>
    <tr><td><?php echo $row[0]?></td><td><?php echo $row[1]?></td></tr>
<?php endforeach;
}
?>
</table>
