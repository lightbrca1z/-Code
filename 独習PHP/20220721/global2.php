<?php

$x = 10;

function checkScope(): int{
    global $x;
    //ローカル変数の破棄
    // unset($x);
    //グローバル変数の破棄
    unset($GLOBALS['x']);
    return ++$x;
}

print checkScope();
print $x;

?>