const fruits = {apple:"りんご",banana:"バナナ"};
const entries = Object.entries(fruits);
console.log(entries);

//for・・・of文でプロパティと値のペアの配列をループ。
for(const entry of entries){
    console.log(entry[0],entry[1]);
}