let bytes = new Uint8Array(1024);
//バイナリデータを扱える。
let view = new DataView(bytes.buffer,
                    bytes.byteOffset,
                    bytes.byteLength);
let int = view.getInt32(0);
console.log(int);
int = view.getInt32(4,false);
console.log(int);
int = view.getUint32(8,true);
console.log(int);
view.setUint32(8,int,false);