const arry = [10,2,7,3,9];

//昇順(小さい数値から大きい数値への並び替え)
function ascending(a,b){
    return a - b;
}
console.log(arry.sort(ascending));

//降順(大きい数値から小さい数値へ並べ替え)
function descending(a,b){
    return b - a;
}
console.log(arry.sort(descending));