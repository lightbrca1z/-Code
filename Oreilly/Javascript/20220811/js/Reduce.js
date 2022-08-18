let a = [1,2,3,4,5];
console.log(a.reduce((x,y) => x+y, 0));
console.log(a.reduce((x,y) => x*y, 1));
console.log(a.reduce((x,y) => (x > y) ? x : y));