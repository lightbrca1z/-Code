const map = new Map;
map.set("apple","りんご");
map.set("banana","バナナ");

for(const row of map){
    //配列の0番目にキー、1番目に値が格納されている。
    console.log(row[0],row[1]);
}