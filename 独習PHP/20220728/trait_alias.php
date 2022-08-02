<?php

trait MyTrait1{
    public function hoge(): void{
        print 'MyTrait1'."<br/>";
    }
}

trait MyTrait2{
    public function hoge() : void{
        print 'MyTrait2';
    }
}

class MyClass{
    //切り替えて使う。エラーを確認する。
    use MyTrait1,MyTrait2;
    // use MyTrait1;
    // use MyTrait2;
}

$cls = new MyClass();
$cls -> hoge();
?>