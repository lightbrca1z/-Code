<?php
$fruits = [
    'apple' => 'りんご', 
    'grape' => 'ぶとう',
    'lemon' => 'レモン',
    'tomato' => 'トマト',
    'peach' => 'もも'
];

echo $fruits['apple'];
echo $fruits['lemon'];

?>

<dl>
    <?php foreach($fruits as $english => $japanese): ?>
    <dt><?php echo $english;?></dt>
    <dd><?php echo $japanese;?></dd>
    <?php endforeach; ?>
</dl>