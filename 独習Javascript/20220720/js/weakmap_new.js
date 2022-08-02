const wm = new WeakMap();
let keyObj = {};
wm.set(keyObj,"value");
console.log(wm);

wm.set(1,"value2");