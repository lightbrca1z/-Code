<?php
echo $_SERVER['HTTP_HOST'];
echo dirname($_SERVER['PHP_SELF']);
header('Location:'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/file1.php');
?>