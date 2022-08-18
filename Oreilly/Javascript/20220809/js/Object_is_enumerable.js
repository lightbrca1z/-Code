let o = {x:1};
console.log(Boolean(o.propertyIsEnumerable("x")));
console.log(Boolean(o.propertyIsEnumerable("toString")));
console.log(Boolean(Object.prototype.propertyIsEnumerable("toString")));