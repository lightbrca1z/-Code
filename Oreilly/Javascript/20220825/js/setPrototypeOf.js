let o = {x : 1};
let p = {t: 2};
console.log(Object.setPrototypeOf(o,p));

let a = [1,2,3];
console.log(Object.setPrototypeOf(a, p));
console.log(a.join);