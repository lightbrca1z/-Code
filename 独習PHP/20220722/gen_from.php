<?php
function readFiles(string ...$files){
    //配列から順にファイルパスを取り出す。
    foreach($files as $file){
        //ジェネレーター readLinesに処理を委ねる。
        yield from readLines($file);
    }
}

function readLines(string $path){
    $file = fopen($path,'rb') or die('ファイルが見つかりません。');
    //行単位にテキストを取得
    while($line = fgets($file,1024)){
        yield $line;
    }
    fclose($file);
}

//sample.dat/sample2.datの内容を順に列強
foreach(readFiles('./dat/sample.dat','./dat/sample2.dat') as $line){
    print $line.'<br/>';
}

?>