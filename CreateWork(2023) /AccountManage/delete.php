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
    try{
    $database = new PDO('sqlite:/Users/lighttobrca/registAccount.db');
    }catch(Exception $e){
    print "Couldn't connect to database: ".$e->getMessage();
    exit();
    }
    
    $sql = "delete from registAccount";

    $error = "";

    try{
        !$database->query($sql); 
    }catch(Exception $error){
        echo "作成に失敗 - {$error}<br />";
    }finally{
        echo "削除成功!";
    }
    ?>
</body>
</html>