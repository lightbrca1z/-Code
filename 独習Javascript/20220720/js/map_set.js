const fruits = new Map();
fruits.set(1,"apple");
const emptyObj = {};
fruits.set(emptyObj,"orange");
fruits.set(true,"grape");
console.log(fruits);