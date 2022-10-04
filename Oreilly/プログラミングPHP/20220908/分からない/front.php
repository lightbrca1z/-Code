<?php
include_once "Log.php";
session_start();
?>

<html><head><title>フロントページ</title></head>
<body>

<?php
$now = strftime("%c");

if(!isset($_SESSION['Logger'])){
    $logger = new Log("/tmp/persistent_log");
    $_SESSION['logger'] = $logger;

    $logger->write("作成時刻 $Now");

    echo "<p>セッションおよびログオブジェクトを作成しました。";
}

$logger->write("最初のページの読み込み時刻{$now}");

echo "<p>ログの内容</p>";
echo nl2br($logger->read());
?>

<a href="next.php">次のページへ</a>

</body></html>