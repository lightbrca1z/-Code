<?php
class MyParent{
    //現在のクラス名を表示
    public static function show(){
        print __CLASS__;
    }

    //showメソッド経由で現在のクラス名を表示
    public static function staticTest(){
        self::show();
    }
}

class MyChild extends MyParent{
    //現在のクラス名を表示
    public static function show(){
        print __CLASS__;
    }
}

MyChild::staticTest();

?>