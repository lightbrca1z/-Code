<?php
date_default_timezone_set('Asia/Tokyo');
$time = date('G');
?>
<?php if($time < 7): ?>
<p>* 営業時間外です</p>
<?php else: ?>
<p>ようこそ</p>
<?php endif; ?>
<?php
$s = '';
if($s):
    echo '$sには文字が入っています';
endif;
?>
<?php
$x = 0;
if(!$s):
    echo '$xには0です';
endif;
?>

