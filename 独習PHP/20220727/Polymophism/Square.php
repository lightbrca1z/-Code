<?php

require_once 'Figure.php';

class Square extends Figure{
    //三角形の面積を求めるたmのgetAreaメソッドを定義
    public function getArea(): float{
        return $this -> width * $this -> height;
    }
}

?>