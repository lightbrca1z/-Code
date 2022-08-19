//リトルエンディアンのシステムとビッグエンディアンのシステム。
let littleEndian = new Int8Array(new Int32Array([1]).buffer);
console.log(littleEndian);