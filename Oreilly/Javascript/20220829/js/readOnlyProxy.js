function readOnlyProxy(o){
    function readonly(){ throw new TypeError("Readonly");}
    return new Proxy(o,{
        set: readonly,
        defineProperty: readonly,
        deleteProperty: readonly,
        setPrototypeOf: readonly,
    });
}
let o;
let p;
console.log(o = {x:1,y:2});
console.log(p = readOnlyProxy(o));
console.log(p.x);
console.log(p.x = 2);
console.log(delete p.y);
console.log(p.z = 3);
console.log(p.__proto__ = {});