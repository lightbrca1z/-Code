<html>
    <head><title>玄関</title></head>
    <?php
    $backgroundName = $_COOKIE['bg'];
    $foregroundName = $_COOKIE['fg'];
    ?>
    <body bgcolor="<?= $backgroundName; ?>" text="<?= $foregroundName; ?>">

    <h1>いらっしゃいませ</h1>

    <p>さまざまな商品を取り揃えております。どうぞごゆっくりご覧ください。
    何か気になることがございましたら店員にお申し付けください。念のため
    言っておきますが、商品を壊したら弁償してもらいますからね！</p>

    <p><a href="colors.php">設定を変更</a>しますか？</a>
</html>