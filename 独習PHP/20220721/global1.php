<?php

//エラーにならない。実行される。

$x = 10;

function checkScope(): int{
    global $x;
    return ++$x;
}

print checkScope();
print "<br/>";
print $x;
?>