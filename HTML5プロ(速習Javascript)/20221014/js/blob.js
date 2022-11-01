var source = new Uint8Array(128);
var blob = new Blob([source],{type: "application/octet-binary"});
console.log(blob.size);
console.log(blob.type);