const fruits = {apple: "りんご", banana:"バナナ"};
const props = Object.keys(fruits);
console.log(props);

//for...of文でプロパティの配列をループ
for(const prop of props){
    console.log(prop, fruits[prop]);
}