const wm = new WeakMap();
let keyObj = {};
wm.set(keyObj,"value");
console.log(wm.has(keyObj));
console.log(wm.has({}));