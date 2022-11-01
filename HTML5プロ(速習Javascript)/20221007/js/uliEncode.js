var url = "http://foo.bar?str=";
var search = "字1+字2";

var uri1 = url + search;

var uriEncoded1 = encodeURI(uri1);

var uriEncoded2 = url + encodeURIComponent(search);

console.log(uri1);

console.log(uriEncoded1);

console.log(uriEncoded2);

console.log(decodeURI(uriEncoded1));



