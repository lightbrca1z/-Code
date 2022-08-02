const wm = new WeakMap();
let keyObj = {};
wm.set(keyObj,"value");
wm.delete(keyObj);
console.log(wm);