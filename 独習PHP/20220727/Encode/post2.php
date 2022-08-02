<?php require_once './Encode.php'; ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ポストデータ</title>
</head>
<body>
    こんにちは、<?=e($_POST['name'])?>さん!
</body>
</html>