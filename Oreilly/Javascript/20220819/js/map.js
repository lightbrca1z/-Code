let m = new Map();
console.log(m.size);
m.set("one", 1);
m.set("two", 2);
console.log(m.size);
m.get("two")
m.get("three")
// trueで、3になる。
m.set("one",true);
console.log(m.size);
m.has("one");
m.has(true);
m.delete("one");
console.log(m.size);
m.delete("three");
m.clear();
console.log(m.size);
