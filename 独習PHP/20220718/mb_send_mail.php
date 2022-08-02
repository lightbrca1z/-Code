<?php
//メール構成情報を設定
// $to = 'wings@example.com';
$to = 'quwieorpt@gmail,com';
$subject = '独習PHP 改訂版';
$body = "こんにちは, mb_send_mail関数!\nどうですか？"; //本文
$headers = "FROM : user01.example.com\n";
$headers .= "Cc : yamada@example.com\n";
$headers .="X-Mailer : PHP 8\n"; //以上、その他のヘッダー情報
if(mb_send_mail($to,$subject,$body,$headers)){
    print 'メール送信に成功しました。';
}else{
    print 'メール送信に失敗しました';
}