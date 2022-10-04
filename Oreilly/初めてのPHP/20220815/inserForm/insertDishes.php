<?php

require 'formHelper.php';
try{
    $db = new PDO('sqlite:/Users/lighttobrca/mydb.db');
}
catch(PDOException $e){
    print "Can't connect: ".$e->getMessage();
    exit();
}

// DBエラー時の例外を設定する。
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

//メインページロジック：
//フォームがサブミットされたら、検証して処理または再表示を行う。
//サブミットされていなければ、表示する。

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //validate_form()がエラーを返したら, エラーをshow_form()に渡す。
    list($errors, $input) = validate_form();
    if($errors){
        show_form($errors);
    }else{
        //サブミットされた値が妥当なら処理する。
        process_form($input);
    }
}else{
    //フォームがサブミットされていなければ表示する。
    show_form();
}

function show_form($errors = array()){
    //独自のデフォルトを設定する : priceは$5
    $defaults = array('price' => '5.00');

    //適切なデフォルトで$formオブジェクトを用意する。
    $form = new FormHelper($defaults);

    // 明確にするために、HTMLとフォームの表示はすべて別のファイルに入れる。
    include 'insert-form.php';
}

function validate_form(){
    $input = array();
    $errors = array();

    //dish_nameは必須
    $input['dish_name'] = trim($_POST['dish_name'] ?? '');
    if (! strlen($input['dish_name'])){
        $errors[] = 'Please enter the name of the dish';
    }

    //priceは妥当な浮動小数点数で
    //0より大きくなくてはいけない
    $input['price'] = filter_input(INPUT_POST,'price',FILTER_VALIDATE_FLOAT);
    if($input['price'] <= 0){
        $errors[] = 'Please enter a valid price.';
    }

    //is_spicyのデフォルトを'no'にする。
    $input['is_spicy'] = $_POST['is_spicy'] ?? 'no';

    return array($errors,$input);
}

function process_form($input){
    //この関数内でグローバル変数$dbにアクセスする。
    global $db;

    // $is_spicyの値をチェックボックスに基づいて設定する。
    if($input['is_spicy'] == 'yes'){
        $is_spicy = 1;
    }else{
        $is_spicy = 0;
    }

    //テーブルに新しい料理を挿入する。
    try{
        $stmt = $db->prepare('INSERT INTO dishes (dish_name,price,is_spicy) VALUES (?,?,?)');
        $stmt->execute(array($input['dish_name'], $input['price'], $is_spicy));
        print 'Added '.htmlentities($input['dish_name']).' to the database.';
    }catch(PDOException $e){
        print "Couldn't add your dish to the database.";
    }
}
?>