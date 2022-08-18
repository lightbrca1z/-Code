let a = [-2,-1,1,2].flatMap(x => x < 0 ? [] : Math.sqrt(x));
console.log(a);