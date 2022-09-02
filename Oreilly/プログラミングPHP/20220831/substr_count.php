<?php

$sketch = <<< EndOfSketch
eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam,
eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam,
eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam,eggAndSpam
EndOfSketch;

$count = substr_count($sketch, "Spam");
print("spamという単語が{$count}回登場しました。");

?>