<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="confirm.php" method="POST">
        <label>
            名前：
            <input type="text" name="name1">
        </label><br/>
        <label>
            性別：
            <select name="sex">
            <option value="1">男</option>
            <option value="2">女</option>
            </select>
        </label><br/>
        <label>
            年齢：
            <input type="text" name="age">
        </label><br/>
        <label>
            職業：
            <input type="text" name="job">
        </label><br/>
        <label>
            趣味：
            <input type="text" name="hobby">
        </label><br/>
        <input type="submit" value="送信">
    </form>
</body>
</html>