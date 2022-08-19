let m = new Map();
//{}は空のオブジェクト。
m.set({}, 1);
m.set({}, 2);
console.log(m.size);
m.get({})
m.set(m, undefined);
m.has(m)
console.log(m.get(m));