<?php
//継承元のクラスファイルをインポート
require_once 'Person.php';
//require_once '../inheritance/Person.php';


class BusinessPerson extends Person{
    //サブクラス独自のworkメソッドを定義
    public function work():void{
        print "<p>{$this->lastName}{$this->firstName}は働いています。</p>";
    }
}
?>