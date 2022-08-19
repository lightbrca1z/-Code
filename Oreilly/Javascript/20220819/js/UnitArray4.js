let bytes = new Uint8Array(8);
console.log(bytes[0] = 1);
console.log(bytes.buffer[0]);
console.log(bytes.buffer[1] = 255);
console.log(bytes.buffer[1]);
console.log(bytes[1]);
