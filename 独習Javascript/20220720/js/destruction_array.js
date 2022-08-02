let arry = [1,2,3];

let[x,y,z] = arry;
console.log(x,y,z);

let[x1,,z1] = arry;
console.log(x1,z1);

let x2;
[x2] = arry;
console.log(x2);

let[,,,a3=4] = arry;
console.log(a3);

let[x4, ...rest] = arry;
console.log(x4,rest);