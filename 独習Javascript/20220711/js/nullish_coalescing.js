//変数にnullを格納
let val = null;

//右辺のvalはnullのため初期値がvalに設定される。
val = val ?? '初期値';
console.log(`val[${val}]`);

//null, undefined以外は左のオペランドを返す。
let num = 0;
num = num ?? 10;
console.log(`num[${num}]`);

//""はfalsyな値
val = "";
val = val || "初期値";
console.log(`val[${val}]`);

