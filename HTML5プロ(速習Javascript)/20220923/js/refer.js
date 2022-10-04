var a = ["foo", "bar", "hoge"];

console.log(typeof(a));

console.log(a[0]);

var b = a;

console.log(typeof(b));

console.log(b[0]);

a[0] = 'xxx';

console.log(a[0]);

console.log(b[0]);