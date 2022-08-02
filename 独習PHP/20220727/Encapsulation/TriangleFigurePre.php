<?php

class TriangleFigure{
    //base(底辺),height(高さ)プロパティを定義
    public float $base;
    public float $height;

    //プロパティ値の初期化(コンストラクター)
    public function __construct(){
        $this->base = 1;
        $this->height = 1;
    }

    //プロパティ値を基に面積を取得
    public function getArea(): float{
        return $this -> base * $this -> height / 2;
    }
}

?>