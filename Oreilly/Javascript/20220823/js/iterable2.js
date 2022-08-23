let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
console.log(iter.next().value);
console.log([...iter]);