var buffer = new ArrayBuffer(12);

var ary = new Uint32Array(buffer, 1, 2);
ary[0] = 0x12345678;
ary[1] = 0x98765432;

console.log(ary);