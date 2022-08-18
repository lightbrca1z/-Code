//反復可能なオブジェクトaの要素のわを返す。
//要素はすべて数値でなければならない。
function sum(a){
    let total = 0;
    for(let element of a){
        if(typeof element !== "number"){
            throw new TypeError("sum(): elments must be numbers");
        }
        total += element;
    }
    return total;
}

console.log(sum([1,2,3]));
console.log(sum(1,2,3));
console.log(sum([1,2,"3"]));