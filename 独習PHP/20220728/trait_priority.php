<?php

use MyChild as GlobalMyChild;
use MyParent as GlobalMyParent;

class MyParent{
    public function hoge() : void{
        print 'MyParent!!';
    }
}

trait MyTrait{
    public function hoge(): void{
        print 'MyTrait!!';
    }
}

//MyParentクラス、MyTraitクラスを継承
class MyChild extends MyParent{
    //コメントアウトして、確かめてみる。
    use MyTrait;

    public function hoge() : void{
        print 'MyChild!!';
    }
}

$cls = new MyChild();
$cls->hoge();

?>