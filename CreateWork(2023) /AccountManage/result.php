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
    
    $sql = "CREATE TABLE 'registAccount' ('AccountId' INTEGER PRIMARY KEY, 
    'name' TEXT,
    'sex' TEXT,
    'age' INTEGER,
    'job' TEXT,
    'hobby' TEXT
    )";

    $error = "";

    // try{
    //     !$database->query($sql); 
    // }catch(Exception $error){
    //     echo "作成に失敗 - {$error}<br />";
    // }finally{
    //     echo "テーブル作成に成功！<br/>";
    // }
    ?>
    <?php
     $name = $_POST['name1'];
     $sex = $_POST['sex'];
     $age = $_POST['age'];
     $job = $_POST['job'];
     $hobby = $_POST['hobby'];
    ?>
    <form action="result.php" method="POST">
        <label>
            名前：
            <?= $_POST['name1']?>
        </label><br/>
        <label>
            性別：
            <?= $_POST['sex']?>
        </label><br/>
        <label>
            年齢：
            <?= $_POST['age']?>
        </label><br/>
        <label>
            職業：
            <?= $_POST['job']?>
        </label><br/>
        <label>
            趣味：
            <?= $_POST['hobby']?>
        </label><br/>
    </form>

<?php
$sql = <<<SQL
INSERT INTO registAccount ('name','sex', 'age', 'job', 'hobby') 
VALUES ('$name','$sex',$age,'$job','$hobby');

SQL;

try{
    !$database->query($sql); 
}catch(Exception $error){
    echo "追加に失敗 - {$error}<br />";
}finally{
    echo "AuthorsへのInsert - OK<br />";
}

?>
</body>
</html>