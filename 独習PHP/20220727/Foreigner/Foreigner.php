<?php

require_once 'Person.php';

class Foreigner extends Person{
    //新たな追加したmiddlenameプロパティ
    // public string $middleName;

    //スーパークラスのコンストラクターをオーバーライド
    public function __construct(string $firstName, string $middleName, string $lastName){
        //スーパークラスのコンストラクターを呼び出し
        parent::__construct($firstName, $lastName);
        //独自のmiddleNameプロパティを初期化
        $this->middleName = $middleName;
    }

    //middleNameプロパティ対応にshowメソッドもオーバーライド
    public function show(): void{
        print "<p>ボクの名前は{$this->firstName}.{$this->middleName}.{$this->lastName}です。</p>";
    }
}

?>