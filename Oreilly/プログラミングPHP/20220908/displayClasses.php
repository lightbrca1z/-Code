<?php

function displayClasses()
{
    $classes = get_declared_classes();

    foreach($classes as $class){
        echo "{$class}について情報<br/>";
        echo "クラスのメソッド<br/>";

        $methods = get_class_methods($class);

        if(!count($methods)){
            echo "<i>なし</i><br/>";
        }
        else{
            foreach($methods as $method){
                echo "<b>{$method}</b>()<br/>";
            }
        }

        echo "クラスのプロパティ<br/>";


        $properties = get_class_methods($class);
        if(!count($properties)){
            echo "<i>なし</i><br/>";
        }
        else{
            foreach(array_keys($properties) as $property){
                echo "<b>{$property}</b><br/>";
            }
        }

        echo "<hr />";
    }
}

displayClasses();

?>