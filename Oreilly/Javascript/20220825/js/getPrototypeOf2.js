let p = {x:1};
let o = Object.create(p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));
console.log(Object.prototype.isPrototypeOf(o));