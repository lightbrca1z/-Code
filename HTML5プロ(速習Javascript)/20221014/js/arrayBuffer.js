var buffer = new ArrayBuffer(2);
var dataview = new DataView(buffer);

dataview.setUint16(0, 0x1234, true);

console.log(dataview.getUint16(0).toString(16));

console.log(dataview.getUint16(0, true).toString(16));