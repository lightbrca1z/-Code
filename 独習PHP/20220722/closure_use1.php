<?php
//リスト6.35を参照
function myArrayWalk(array $array,callable $func): void{
    foreach($array as $key => $value){
        $func($value, $key);
    }
}

//結果を求めるための関数
$data = [100,50,10,5];
//結果値を格納するための変数
$result = 0;
myArrayWalk($data,function($value,$key) use(&$result){
    $result += $value;
});

print "合計値:{$result}";

?>