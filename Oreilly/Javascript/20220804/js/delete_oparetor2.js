let o = {x:1, y:2};
delete o.x;
console.log(typeof o.x);
delete o.x;
console.log(o);
delete 1;
console.log(o);
delete o;
console.log(o);
delete Object.prototype;
console.log(o);