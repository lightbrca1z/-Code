let m = new Map([["one",1],["two",2]]);
for(let [k,v] of m) console.log(k,v);
console.log([...m]);
console.log([...m.entries()]);
console.log([...m.keys()]);
console.log([...m.values()]);
console.log(new Set("abc"));