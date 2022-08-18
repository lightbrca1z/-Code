let a = ["world"];
let value = a[0];
console.log(value);
a[1] = 3.14;
let i = 2;
a[i] = 3;
console.log(a[i]);
a[i + 1] = "hello";
a[a[i]] = a[0];