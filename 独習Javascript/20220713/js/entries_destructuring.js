for(const [key,value] of Object.entries({apple:"りんご",banana:"バナナ"})){
    console.log(key, value);
}

//外で変数宣言して、for_ofで分割代入したオブジェクトを出力。
const entries = Object.entries({apple:"りんご",banana:"バナナ"});

for(const [key,value] of entries){
    console.log(key,value);
}