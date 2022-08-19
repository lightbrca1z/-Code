let ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]);
let last3 = ints.subarray(ints.length - 3, ints.length);
console.log(last3[0]);

ints[9] = -1;
console.log(last3[3]);