function constfunc(v) { return () => v;}

//関数の配列を生成する。
let funcs = [];
for(var i = 0;i < 10; i++) funcs[i] = constfunc(i);

console.log(funcs[5]());