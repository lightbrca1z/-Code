let ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]);
let last3 = ints.subarray(ints.length - 3, ints.length);

last3.buffer
console.log(last3.buffer === ints.buffer);
console.log(last3.byteOffset);
console.log(last3.byteLength);
console.log(last3.buffer.byteLength);