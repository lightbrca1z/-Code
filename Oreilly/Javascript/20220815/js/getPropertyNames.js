function getPropertyNames(o,a){
    if(a === undefined) a = [];
    for(let property in o) a.push(property);
    return a;
}

let o = {x : 1}, p= {y:2,z:3};
let a = getPropertyNames(o);
console.log(getPropertyNames(p,a));