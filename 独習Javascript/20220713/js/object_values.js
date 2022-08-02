const fruits = {apple:"りんご",banana:"バナナ"};
const values = Object.values(fruits);
console.log(values);

//for...of文で値の配列をループ
for(const value of values){
    console.log(value);
}