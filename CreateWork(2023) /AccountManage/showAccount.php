<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$result = "";
try{
    $database = new PDO('sqlite:/Users/lighttobrca/registAccount.db');
    }catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
    }

    $sql = "select * from registAccount";

try{
    // !$database->query($sql); 
    $sqlExcute = $database->prepare($sql);
    $sqlExcute->execute();
    $result = $sqlExcute->fetchAll();
}catch(Exception $error){
    echo "追加に失敗 - {$error}<br />";
}finally{
    // echo "AuthorsへのInsert - OK<br />";
}
?>
    <table>
        <tr>
        <th>名前</th><th>性別</th><th>年齢</th><th>職業</th><th>趣味</th>
        </tr>
        <?php foreach($result as $row){
            if($row["sex"] == "1"){
                $sex= "男";}
            elseif($row["sex"] == "2"){$sex="女";}
            echo "<tr>";
            echo "<td>".$row["name"]."</td>";
            echo "<td>".$sex."</td>";
            echo "<td>".$row["age"]."</td>";
            echo "<td>".$row["job"]."</td>";
            echo "<td>".$row["hobby"]."</td>";
            echo "<tr>";
        }?>
    </table>
</body>
</html>