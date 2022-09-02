let identity = new Proxy({},{
    get(o,name, target){return name;},
    has(o,name){return true; },
    ownKeys(o){ throw new RangeError("Infinite number of properties"); },
    getOwnPropertyDescriptor(o, name){
        return{
            value: name,
            enumerable: false,
            writable: false,
            configurable: false,
        };
    },

    set(o,name,value,target){return false;},
    deleteProperty(o,name){return false;},
    defineProperty(o,name,desc){return false;},
    isExtensible(o){return false;},
    getPrototypeOf(o){return null;},
    setPrototypeOf(o,proto){return false;},
});

console.log(identity.x);
console.log(identity.toString);
console.log(identity[0]);
console.log(identity.x = 1);
console.log(identity.x);
console.log(delete identity.x);
console.log(identity.x);
console.log(Object.keys(identity));
// console.log(for(let p of identity););