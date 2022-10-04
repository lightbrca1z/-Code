<?php

session_start();

if(!empty($_POST['posted']) && !empty($_POST['email'])){
    $folder = "surveys/".strtolower($_POST['email']);

    $_SESSION['folder'] = $folder;

    if(!file_exists(($folder))){
        mkdir($folder, 0777,true);
    }

    header("Location: fileAccess2.php");
}

else { ?>

<html>
    <head>
        <title>Files & folders - On-line Survey</title>
    </head>

    <body bgcolor="white" text="black">
        <h2>Survey Form</h2>

        <p>Please enter your e-mail address to start recording your comments</p>

        <form action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="POST">
            <input type="hidden" name="posted" value="1">
            <p>Email address:<input type="text" name="email" size="45" /><br/>
            <input type="submit" name="submit" value="Submit"></p>
        </form>
    </body>
</html>

<?php }
?>