try{
    nonExisingFuction();
    console.log("nonExisingFuctionでの例外により、これは実行されません。");
}catch(error){
    console.error("nonExisitingFunctionは存在しないため、例外が発生しました。");
    console.error("エラータイプ : " + error.name);
    console.error("エラーメッセージ : " + error.message);
}finally{
    console.log("後処理の記述が必要な場合はここに記述します。");
}

console.log("例外が発生しても後続のコードが実行されます。")