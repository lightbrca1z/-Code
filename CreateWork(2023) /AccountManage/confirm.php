<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="result.php" method="POST">
        <label>
            名前：
            <?= $_POST['name1']?>
            <input type="hidden" name="name1" value="<?= $_POST['name1']?>">
        </label><br/>
        <label>
            性別：
            <?= $_POST['sex']?>
            <input type="hidden" name="sex" value="<?= $_POST['sex']?>">
        </label><br/>
        <label>
            年齢：
            <input type="hidden" name="age" value="<?= $_POST['age']?>">
            <?= $_POST['age']?>
        </label><br/>
        <label>
            職業：
            <input type="hidden" name="job" value="<?= $_POST['job']?>">
            <?= $_POST['job']?>
        </label><br/>
        <label>
            趣味：
            <input type="hidden" name="hobby" value="<?= $_POST['hobby']?>">
            <?= $_POST['hobby']?>
        </label><br/>
        <input type="submit" value="送信">
    </form>
</body>
</html>