console.log(Object.getOwnPropertyDescriptor({x: 1}, "x"));

const random = {
    get octet() { return Math.floor(Math.random()*256);},
};

console.log(Object.getOwnPropertyDescriptor(random, "octet"));

console.log(Object.getOwnPropertyDescriptor({},"x"));
console.log(Object.getOwnPropertyDescriptor({},"toString"));