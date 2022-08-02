console.log("hello,world");

console.log(1234+0.5);
console.log(1234+.5);

console.log(3e4);
console.log(0b11);

console.log(0o11);

console.log(0x11);

let integerNumber = 100;
let floatNumber = 100.0;

console.log(integerNumber + floatNumber);

let sumNumber = 5+6-1;
console.log(5+6-1);
console.log(sumNumber * 2);
sumNumber = sumNumber * 2;
console.log(sumNumber % 3);
sumNumber = sumNumber % 3;
console.log(sumNumber ** 3);

//Big int型 (他の型とMixは出来ない。)

console.log("number型のBigint型");

console.log(2 ** 53 + 1);

console.log(2n ** 53n + 1n);

// let num = 2;
// let bi = 3n;

// console.log(num * bi); // can't not mix big int and other type.

let three = 3n;
let five = 5n;

console.log(five / three);
