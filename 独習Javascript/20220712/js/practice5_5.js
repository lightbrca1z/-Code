
let greeting;
//切り替え
// greeting = 0;
greeting = "こんにちは";

try{

    if(typeof greeting !== "string"){
        throw new Error("不正なデータ型です。");
    }

    console.log(`${greeting}, 良い天気ですね。`);
} catch(e){
    console.error(e);
}