<?php

require './inserForm/FormHelper.php';

try{
    $db = new PDO('sqlite:/Users/lighttobrca/mydb.db');
}catch (PDOException $e){
    print "Can't connect: ".$e->getMessage();
    exit();
}

//DBエラー時の例外を設定する。
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//フェッチモードを設定する: オブジェクトとしての行
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);

//フォームの「spicy」メニューの選択肢
$spicy_choices = array('no','yes','either');

//メインページロジック：
//- フォームがサブミットされたら、検証して処理または再表示を行う。
//- サブミットされていなければ、表示する。
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //validate_form()がエラーを返したら、エラーをshow_form()に渡す。
    list($errors,$input) = validate_form();
    if($errors){
        show_form($errors);
    }else{
        process_form($input);
    }
}else{
    //フォームがサブミットされていなけらば表示する。
    show_form();
}

function show_form($errors = array()){
    //独自のデフォルトを設定する。
    $default = array('min_price' => '5.00',
                     'max_price' => '25.00');
    
    //適切なデフォルトで$formオブジェクトを用意する。
    $form = new FormHelper($default);

    //明確にするために、HTMLとフォーム表示はすべて別のファイルに入れる。
    include 'retrieve-form.php';
}

function validtate_form(){
    $input = array();
    $errors = array();

    //サブミットされた料理名から先頭と末尾のホワイトスペースを取り除く
    $input['dish_name'] = trim($_POST['dish_name'] ?? '');

    //最低価格は有効な浮動小数点数で指定する。
    $input['min_price'] = filter_input(INPUT_POST,'min_price',
                                      FILTER_VALIDATE_FLOAT);
    if($input['min_price'] === null || $input['min_price'] === false){
        $errors[] = 'please enter a valid minium price.';
    }

    //最高価格は有効な浮動小数で指定する。
    $input['max_price'] = filter_input(INPUT_POST,'max_price',
                                      FILTER_VALIDATE_FLOAT);
    if($input['max_price'] === null || $input['max_price'] === false){
        $errors[] = 'Please enter a valid maximum price.';
    }

    //最低価格は最高価格よりも低くする。
    if($input['min_price'] >= $input['max_price']){
        $errors[] = 'The minumum price must be less than the maximum price.';
    }

    $input['is_spicy'] = $_POST['is_spicy'] ?? '';
    if(! array_key_exists($input['is_spicy'], $GLOBALS['spicy_choices'])){
        $errors[] = 'Please choose a valid "spicy" option.';
    }
    return array($errors, $input);
}

function process_form($input){
    //この関数内でグローバル変数$dbにアクセスする。
    global $db;

    //クエリを作成する。
    $sql = 'SELECT dish_name, price, is_spicy FROM dishes WHERE
            PRICE >= ? AND price <= ?';

    //料理名がサブミットされたら、WHERE句に追加する。
    //quote()とstrtr()を使ってユーザ入力のワイルドカードが機能しないようにする。
    if(strlen($input['dish_name'])){
        $dish = $db->quote($input['dish_name']);
        $dish = strtr($dish, array('_' => '\_', '%' => '\%'));
        $sql .= " AND dish_name LIKE $dish";
    }

//is_spicyが「Yes」か「No」の場合、適切なSQLを追加する。
//(「either」なら、is_spicyをWHERE句に追加する必要はない。)
$spicy_choice = $GLOBALS['spicy_choices'][$input['is_spicy']];
if($spicy_choice == 'YES'){
    $sql .=' AND is_spicy = 1';
}elseif($spicy_choice == 'no'){
    $sql .=' AND is_spicy = 0 ';
}

//クエリをデーターベースに送り、すべての行を取得する。
$stmt = $db->prepare($sql);
$stmt->execute(array($input['min_price'], $input['max_price']));
$dishes = $stmt->fetchAll();

if(count($dishes) == 0){
    print 'No dishes matched.';
}else{
    print '<table>';
    print '<tr><td>Dish Name</th><th>Price</th><th>Spicy?</th></tr>';
    foreach ($dishes as $dish){
    if($dish->is_spicy == 1){
        $spicy = 'Yes';
    }else{
        $spicy = 'No';
    }
    printf('<tr><td>%s</td><td>$%.02f</td><td>%s</td></tr>.',
           htmlentities($dish->dish_name), $dish->price, $spicy);
        }
    }
}
?>