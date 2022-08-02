<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>チェックボックス</title>
</head>
<body>
    <form method="POST" action="check2.php">
        あなたがよく使用する言語は? <br/>
        <input id="php" type="checkbox" name="lang[]" value="PHP">
        <label for="php">PHP</label>
        <input id="java" type="checkbox" name="lang[]" value="Java">
        <label for="java">Java</label>
        <input id="csharp" type="checkbox" name="lang[]" value="C#">
        <label for="csharp">C#</label>
        <input type="submit" value="送信" />
    </form>
</body>
</html>