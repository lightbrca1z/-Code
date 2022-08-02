<?php
require_once 'MyClass.php';

$cls = new MyClass();
//MyClassオブジェクトのプロパティをリスト表示
foreach ($cls as $key => $value){
    print "{$key}:{$value} <br/>";
}
print '<hr/>';
//MyClassオブジェクトのプロパティをリスト表示(showPropertyメソッド経由)
$cls->showProperty();

?>