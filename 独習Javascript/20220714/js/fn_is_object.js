//空の関数を定義
function fn(){}

//オブジェクトのようにプロパティの追加が可能。
fn.fullName = "独習太郎";

fn.hello = function(){
    console.log("こんいちは、独習太郎");
}

//プロパティの取得
console.log(fn.fullName);

//メソッドの実行
fn.hello();