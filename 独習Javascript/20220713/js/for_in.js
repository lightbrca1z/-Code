//for inによる、オブジェクト出力。
const fruits = {apple:"りんご",banana:"バナナ",orange:"オレンジ"};

for(const key in fruits){
    console.log(`キー[${key}] 値:[${fruits[key]}]`);
}