<?php

$greeting = "good morning citizen";
$farewell = substr_replace($greeting, "Spam", 5, 7);
echo $farewell;

?>