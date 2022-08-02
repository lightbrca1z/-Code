const map = new Map;
map.set("apple","りんご");
map.set("banana","バナナ");

for(const[key,value] of map){
    //分割代入構文により、任意の変数名でキーと値を受け取り、ループ内で使用可能。
    console.log(key, value);
}