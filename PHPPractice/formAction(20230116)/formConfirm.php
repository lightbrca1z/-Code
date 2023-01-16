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
        $message1 = $_POST["input1"];
        $message2 = $_POST["input2"];
        $message3 = $_POST["input3"];
    ?>
    <form action="formComplete.php" method="POST">
    <table>
        <caption>確認項目</caption>
        <tr><td>名前：</td><td><?=$message1?></td></tr>
        <input type="hidden" name="message1" value="<?=$message1?>">
        <tr><td>年齢：</td><td><?=$message2?></td></tr>
        <input type="hidden" name="message2" value="<?=$message2?>">
        <tr><td>メッセージ：</td><td><?=$message3?></td></tr>
        <input type="hidden" name="message3" value="<?=$message3?>">
    </table>
    <input type="submit" value="送信">
    </form>
</body>
</html>
