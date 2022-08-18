<form method="post" aciton="<?php $_SERVER['PHP_SELF'] ?>">
<input type="text" name="comments"><br/>
<input type="submit" name="submit" value="送信">

<?php
$comments = strip_tags($_POST['comments']);
print $comments;
?>