let o = {};

Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(o.x);
console.log(Object.keys(o));

console.log(Object.defineProperty(o,"x",{writable: false}));

o.x = 2;

console.log(o.x);

Object.defineProperty(o,"x", {value:2});
console.log(o.x);

Object.defineProperty(o,"x",{get:function(){ return 0;}});
console.log(o.x);