<?php

$bits = parse_url("http://me:secret@example.com/cgi-bin/board?user=fred");
foreach($bits as $key => $value){
    print $key." => ".$value."<br/>";
}
?>