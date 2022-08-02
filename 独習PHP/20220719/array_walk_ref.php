<?php
$data = ['高江', '掛谷', '日尾', '薄井', '和田'];
array_walk($data,
    function(&$value){
        print "new{$value}";
        print "<br/>";
    }
);
print_r($data);