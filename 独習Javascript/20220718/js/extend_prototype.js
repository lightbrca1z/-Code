//親のコンストラクタを宣言
function Parent(){}

//子のコンストラクタを宣言
function Child(){}

// 親のプロトタイプにメソッドを追加
Parent.prototype.parentMethod = function(){
    console.log("親のメソッド");
}

//親のプロトタイプを継承
Child.prototype = Object.create(Parent.prototype);

//子のプロトタイプにメソッドを追加
Child.prototype.childMethod = function(){
    console.log("子のメソッド");
}

//インスタンス化
const childObj = new Child;
childObj.parentMethod();
childObj.childMethod();