let a = new Array(5);
a = [];
a[1000] = 0;
// console.log(a[1000]);

let a1 = [,];
let a2 = [undefined];
// console.log(Boolean(0 in a1));
// console.log(Boolean(0 in a2));

// console.log([].length);
// console.log(["a","b","c"].length);

a = [1,2,3,4,5];
// console.log(a.length = 3);
// console.log(a.length = 0);
// console.log(a.length = 5);

a = [];
a[0] = "zero";
// console.log(a[0]);
a[1] = "one";
// console.log(a[1]);

a = [];
a.push("zero");
// console.log(a);
a.push("one", "two");
// console.log(a);

a = [1,2,3,];
delete a[2];
console.log(Boolean(2 in a));
console.log(a.length);