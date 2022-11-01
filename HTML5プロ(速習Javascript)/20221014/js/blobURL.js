var blob = new Blob(["TEXT DATA"],{type: "text/plain"});
var blobURL = URL.createObjectURL(blob); // blobURL生成

console.log(blobURL);

//blobURLをHTTPリクエストに用いる例
var request = new XMLHttpRequest();
request.open('GET', blobURL, false);
request.send();
console.log(request.responseText);