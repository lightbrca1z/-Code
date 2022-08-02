const set = new Set();
console.log(Array.isArray(set));

const convertedArray = Array.from(set);
//isArray -> 配列かどうか調べるメソッド。
console.log(Array.isArray(convertedArray));
