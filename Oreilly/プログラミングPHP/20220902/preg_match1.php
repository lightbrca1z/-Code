<?php

$message = <<< END
To : you@youcorp
From : me@mecorp
Subject: pay up

pay me or else!
END;

preg_match("/^subject: (.*)/im", $message, $match);
print_r($match);

?>