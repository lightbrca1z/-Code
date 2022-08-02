let externalVal = 3;

//関数宣言
function add5(internalVal){
    return internalVal + 5;
}

const result = add5(externalVal);

console.log(result);

try{
    //例外処理の実験。
console.log(internalVal);
}catch(error){
    console.error("存在しないdefineが発生しました。")
    console.error("エラータイプ : " + error.name);
    console.error("エラーメッセージ : " + error.message);
}finally{
    console.log("後処理が記述が必要な場合はここに記述します。");
}

console.log("例外が発生しても後続のコードが実行されます。");
