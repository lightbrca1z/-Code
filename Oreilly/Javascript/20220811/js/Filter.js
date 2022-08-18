let  a = [5,4,3,2,1];
console.log(a.filter(x => x < 3));
console.log(a.filter((x,i) => i % 2 === 0));