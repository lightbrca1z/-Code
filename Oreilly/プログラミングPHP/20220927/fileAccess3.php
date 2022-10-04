<?php

session_start();
$folder = $_SESSION['folder'];
$filename = $folder."/question2.txt";

$file_handle = fopen($filename,"a+");

$comments = "";

if(filesize($filename) !== 0){
$comments = fread($file_handle, filesize($filename));
}
fclose($file_handle);

if(!empty($_POST['posted'])){
    $question2 = $_POST['question2'];
    $file_handle = fopen($filename, "w+");

    if(flock($file_handle, LOCK_EX)){
        if(fwrite($file_handle,$question2) == FALSE){
            echo "Cannot Write to file ($filename)";
        }
        flock($file_handle, LOCK_UN);
    }

    fclose($file_handle);
    header("Location: last_page.php");
} else {

?>

<html>
<head>
<title>Files & folders - On-line Survey</title>
</head>
<body>

<table border=0><tr><td>
Please enter your comments to the following survey statement:
</td></tr>
<tr bgcolor=lightblue><td>
It's a funny thing freedom. I mean how can any of us <br/>
be really free when we still have personal posessions.
How do you respond to the previous statement?
</td></tr>
<tr><td>
<form action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method=POST>
<input type="hidden" name="posted" value=1>
<br/>
<textarea name="question2" rows=12 cols=35><?= $comments ?></textarea>
</td></tr>
<td><tr>
<input type="submit" name="submit" value="Submit">
</form></td></tr>
</table>
</body>
</html>

<?php } ?>