let o = {x:1,y:2,z:3};
let pairs = "";
for(let [k,v] of Object.entries(o)){
    pairs += k + v;
}
console.log(pairs);