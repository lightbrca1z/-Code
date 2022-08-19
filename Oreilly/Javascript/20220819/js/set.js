let s = new Set();
console.log(s.size);
s.add(1);
console.log(s.size);
s.add(1);
console.log(s.size);
s.add(true);
console.log(s.size);
s.add([1,2,3]);
console.log(s.size);
s.delete(1)
console.log(s.size);
s.delete("test")
s.delete(true)
s.delete([1,2,3])
console.log(s.size);
s.clear();
console.log(s.size);