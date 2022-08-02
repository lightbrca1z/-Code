<?php
//高階関数myArrayWalkを定義
function myArrayWalk(array $array, callable $func) : void {
    foreach ($array as $key => $value) {
      $func($value, $key);
    }
  }

  //PHP8をVSCodeが認識していない。
  function showItem(mixed $value, int | string $key) :void {
    print "{$key}：{$value}<br />";
  }
  
  $data = ['杉山', '長田', '杉沼', '和田', '土井'];
  myArrayWalk($data, 'showItem');
  
?>