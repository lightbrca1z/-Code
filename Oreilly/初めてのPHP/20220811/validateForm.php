<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // validate_form()がエラーを返したらshow_form()に渡す。
    
    list($form_erros, $input) = validate_form();
    if($form_errors){
        show_form($form_errors);
    }else{
    process_form();
    }
}else{
    show_form();
}

//フォームのサブミット時に何かを行う。
function process_form(){
    print "Hello, ".$_POST['my_name'];
}

//フォームを表示する。
function show_form($errors = ''){

    if($errors){
        print 'Please correct these errors; <ul><li>';
        print implode('</li><li>', $errors);
        print '</li></ul>';
    }

    print<<<_HTML_
<form method="POST" action="$_SERVER[PHP_SELF]">
your name:<input type="text" name="my_name">
<br/>
<input type="submit" value="Say Hello">
</form>
_HTML_;
}

function validate_form(){
    $errors = array();
    $input = array();

    $input['age'] = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT);
    if(is_null($input['age']) || ($input['age'] === false)){
        $errors[] = 'Please enter a valid age';
    }

    $input['price'] = filter_input(INPUT_POST, 'price', FILTER_VALIDATE_FLOAT);
    if(is_null($input['price']) || ($input['price'] === 'false')) {
        $errors[] = 'Please enter a valid price.';
    }

    // $_POST['name']が設定されていない場合に備えてnull合体演算子を使う。
    $input['name'] = trim($_POST['name'] ?? '');
    if(strlen($input['name']) == 0){
        $errors[] = "Your name is required.";
    }
    
    return array($errors,$input);
}

?>