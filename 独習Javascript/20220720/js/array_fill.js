//fillを使わない場合の例
const arry1 = [];
for(let i = 0;i < 100; i++){
    arry1.push(0);
}
console.log(arry1);

//fillを使った場合の例
const arry2 = new Array(100);
arry2.fill(0);

console.log(arry2);