let bytes = new Uint8Array(1024);
let matrix = new Float32Array(9);
let point = new Int16Array(3);
let rgba = new Uint8ClampedArray(4);
let sudoku = new Int8Array(81);

let white = Uint8ClampedArray.of(255,255,255,0);

let ints = Uint32Array.from(white);

Uint8Array.of(1.23, 2.99, 45000);

let buffer = new ArrayBuffer(1024 * 1024);
buffer.byteLength

let asbytes = new Uint8Array(buffer);
let asints = new Int32Array(buffer);
let lastK = new Uint8Array(buffer, 1023*1024);

let ints2 = new Int32Array(buffer, 1024, 256);