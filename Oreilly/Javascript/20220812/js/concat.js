let a = [1,2,3];
a = a.concat(4,5);
console.log(a);
a = a.concat([4,5],[6,7]);
console.log(a);
a = a.concat(4,[5,[6,7]]);
console.log(a);