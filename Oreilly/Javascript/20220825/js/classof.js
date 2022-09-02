function classof(o){
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classof(null));
console.log(classof(undefined));
console.log(classof(1));
console.log(classof(10n**100n));
console.log(classof(""));
console.log(classof(false));
console.log(classof(Symbol()));
console.log(classof({}));
console.log(classof([]));
console.log(classof([]));
console.log(classof(/./));
console.log(classof(()=>{}));
console.log(classof(new Map()));
console.log(classof(new Set()));
console.log(classof(new Date()));