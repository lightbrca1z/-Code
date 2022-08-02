<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DirectoryIterator クラス</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/
    4.5.0/css/bootstrap.min.css">
</head>
<body>
    <table class="table">
    <thead>
    <tr>
    <th>ファイル</th><th>サイズ</th><th>最終アクセス</th><th>最終更新日</th>
    </tr>
    </thead>
    <?php
    //カレントフォルダーをオープン
    $dir = new DirectoryIterator('./');

    //フォルダーの内容を順番に読み込み
    foreach($dir as $file){
        //読み込んだ要素がファイルである場合のみ表示処理(サブフォルダーなどでない)。
        if($file -> isFile()){
        ?>
        <tr>
            <td><?= $file->getFilename(); ?></td>
            <td><?= $file->getSize(); ?>B</td>
            <td><?= date('Y/m/d H:i:s', $file->getATime()); ?></td>
            <td><?= date('Y/m/d H:i:s', $file->getMTime()); ?></td>
        </tr>
        <?php
        }
    }
    ?>
</tbody>
</table>
</body>
</html>