var n = ["foo","bar","hoge"];
console.log(n.sort());

n = ["foo","bar","hoge"];

console.log(n.pop());
console.log(n);

n = ["foo","bar","hoge"];

console.log(n.length);
console.log(n.push("zzz"));
console.log(n);
console.log(n.length);

n = ["foo","bar","hoge"];
var x = ["aaa","bbb","ccc"];

console.log(n.concat(x));
console.log(n);

n = ["a","b","a","c","d","e","f"];

console.log(n.slice(1,4));

n = ["a","b","a","c","d","e","f"];

console.log(n.splice(2,3));
console.log(n);

n = ["a","b","a","c","d","e","f"];

console.log(n.splice(2,3,"foo","bar"));

console.log(n);

n = ["a","b","a","c","d","e","f"];

console.log(n.shift());
console.log(n);

n = ["foo","bar","hoge"];

console.log(n.unshift("aaa","bbb"));
console.log(n);

n = [111,222,333];

console.log(n);
console.log(n.toString());

var d = [new Date(1975,2,14),new Date(2014,7,31)];

console.log(d.toString());

console.log(d.toLocaleString());