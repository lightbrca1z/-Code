<?php

$baseUrl = 'http://www.google.com/q=';
$query = 'PHP sessions -cookies';
$url = $baseUrl.urlencode($query);
echo $url;

?>