<?php

$template_file = 'page-template.html';
if(is_readable($template_file)){
    $template = file_get_contents($template_file);
    $_SESSION['username'] = "Micheal";
    $page = str_replace('{name}', $_SESSION['username'], $template);
    print $page;
} else{
    print "Can't read template file.";
}

?>