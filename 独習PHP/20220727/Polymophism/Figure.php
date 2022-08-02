<?php

class Figure{
    //プロパティを定義(protected修飾子で制限)
    // protected float $width;
    // protected float $height;

    //コンストラクター(プロパティを初期化)
    public function __construct(float $width, float $height){
        $this -> width = $width;
        $this -> height = $height;
    }
    
    //面積を求める
    public function getArea(): float{
        return 0;
    }
}

?>