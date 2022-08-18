let a = {};

//プロパティを追加して、「配列のように」する。
let i = 0;
while(i < 10){
    a[i] = i * i;
    i++;
}
a.length = i;

//通常の配列のように、ループを使って要素を利用する。

let total = 0;
for(let j = 0;j < a.length; j++){
    total = a[j];
    console.log(total);
}