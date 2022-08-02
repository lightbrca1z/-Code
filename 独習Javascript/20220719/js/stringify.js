const target = {a:0,b:1,c:{d:2,e:0,f:"hello"}};

console.log(JSON.stringify(target));

console.log(JSON.stringify(target,["a","b"]));

console.log(JSON.stringify(target,["e","f"]));

function replacer(prop, value){
    //値が数値型かつ1未満のとき
    if(typeof value === "number" && value < 1){
        return;
    }
    return value;
}
console.log(JSON.stringify(target,replacer));

//タブでインデント
console.log(JSON.stringify(target,null,"\t"));
