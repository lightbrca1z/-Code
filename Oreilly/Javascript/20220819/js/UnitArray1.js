let bytes = new Uint8Array(1024);
let pattern = new Uint8Array([0,1,2,3]);
console.log(bytes.set(pattern));
console.log(bytes.set(pattern, 4));
console.log(bytes.set([0,1,2,3], 8));
console.log(bytes.slice(0, 12));