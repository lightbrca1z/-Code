<?php

session_start();
$folder = $_SESSION['folder'];
$filename = $folder."/question1.txt";
$file_handle = fopen($filename,"a+");

$comments = file_get_contents($filename);
fclose($file_handle);

if(!empty($_POST['posted'])){
    $question1 = $_POST['question1'];
    $file_handle = fopen($filename,"w+");

    if(flock($file_handle, LOCK_EX)){
        if(fwrite($file_handle,$question1) == FALSE){
            echo "Cannot write to file ($filename)";
        }
        flock($file_handle, LOCK_UN);
    }

    fclose($file_handle);
    header("Location: fileAccess3.php");
} else {
    ?>

<html>
    <head>Files & folders - On-line Survey</head>
    <body>

    <table border=0><tr><td>
    Please enter your response to the following survey quesiton:
    </td></tr>
    <tr bgcolor=lightblue><td>
    What is your opinion on the state of the world economy?<br/>
    Can you help us fix it ?
    </td></tr>
    <tr><td>
    <form action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method=POST>
    <input type="hidden" name="posted" value="1">
    <br/>
    <textarea name="question1" rows=12 cols=35><?= $comments ?></textarea>
    </tr></td>
    <tr><td>
    <input type="submit" name="submit" value="Submit">
    </form></td></tr>
    </table>
<?php } ?>    
</body>
</html>